"use client";

import React, { useEffect, useState } from "react";
import { getCommentsData } from "@/data/comment";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

interface CommentData {
  _id: string;
  user: {
    _id: string;
    name: string;
  };
  desc: string;
  post: string;
  parent: string | null;
  replyOnUser: string | null;
  createdAt: string;
}

interface CommentContainerProps {
  className?: string;
  logginedUserId: string;
}

const CommentsContainer: React.FC<CommentContainerProps> = ({
  className,
  logginedUserId,
}) => {
  const [comments, setComments] = useState<CommentData[]>([]);
  const mainComments = comments.filter((comment) => comment.parent === null);
  const [affectedComment, setAffectedComment] = useState<{
    type: string;
    _id: string;
  } | null>(null);

  console.log(comments);

  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })();
  }, []);

  const addCommentHandler = (
    value: string,
    parent: null | string,
    replyOnUser: null | string
  ) => {
    const newComment = {
      _id: Math.random().toString(),
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: null,
      createdAt: new Date().toISOString(),
    };
    setComments((curState) => {
      return [newComment, ...curState];
    });
    setAffectedComment(null);
  };

  const updateCommentHandler = (value: string, commentId: string) => {
    // const updateComments = comments.map((comment) => {
    //   if (comment._id === commentId) {
    //     return {
    //       ...comment,
    //       desc: value,
    //     };
    //   }
    //   return comments;
    // });

    const commentIndex = comments.findIndex(
      (comment) => comment._id === commentId
    );
    if (commentIndex !== -1) {
      const updatedComments = [...comments];
      updatedComments[commentIndex] = {
        ...updatedComments[commentIndex],
        desc: value,
      };

      setComments(updatedComments);
      setAffectedComment(null);
    }
  };

  const deleteCommentHandler = (commentId: string) => {
    const updateComments = comments.filter((comment) => {
      return comment._id !== commentId;
    });
    setComments(updateComments);
  };

  const getRepliesHandler = (commentId: string) => {
    return comments
      .filter((comment) => comment.parent === commentId)
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  };

  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel="Send"
        formSubmitHandler={(value) => addCommentHandler(value, null, null)}
      />
      <div className="space-y-4 mt-8">
        {mainComments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            logginedUserId={logginedUserId}
            affectedComment={affectedComment}
            setAffectedComment={setAffectedComment}
            addComment={addCommentHandler}
            updateComment={updateCommentHandler}
            deleteComment={deleteCommentHandler}
            replies={getRepliesHandler(comment._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
