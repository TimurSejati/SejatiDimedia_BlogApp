import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Post {
  _id: string;
  image: any;
  title: string;
  createdAt: string;
  // Add other properties of the post as needed
}

interface SuggestedPostsProps {
  className?: string;
  header: string;
  posts?: Post[];
  tags?: string[];
}

const SuggestedPosts: React.FC<SuggestedPostsProps> = ({
  className,
  header,
  posts = [],
  tags,
}) => {
  return (
    <div
      className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}
    >
      <h2 className="font-roboto font-medium text-dark-hard md:text-xl">
        {header}
      </h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {posts.map((item) => (
          <div
            key={item._id}
            className="flex space-x-3 flex-nowrap items-center"
          >
            <Image
              className="aspect-square object-cover rounded-lg w-1/5"
              src={item.image}
              alt="image"
            />
            <div className="text-sm font-roboto text-dark-hard font-medium">
              <h3 className="text-sm font-roboto text-dark-hard font-medium md:text-base lg:text-lg">
                {item.title}
              </h3>
              <span className="text-xs opacity-60">
                {new Date(item.createdAt).toLocaleString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-roboto font-medium text-dark-hard mt-8 md:text-xl">
        Tags
      </h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
        {tags?.map((item) => (
          <Link
            key={item}
            href="/"
            className="inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white md:text-sm"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPosts;
