import SuggestedPosts from "@/components/article/SuggestedPosts";
import BreadCrumbs from "@/components/BreadCrumbs";
import CommentsContainer from "@/components/comments/CommentsContainer";
import { images } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Article", link: "/article" },
  { name: "Article title", link: "/article/1" },
];

const postsData = [
  {
    _id: "1",
    image: images.Post1,
    title: "Hel children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "2",
    image: images.Post1,
    title: "Hel children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "3",
    image: images.Post1,
    title: "Hel children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "4",
    image: images.Post1,
    title: "Hel children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "5",
    image: images.Post1,
    title: "Hel children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
];

const tagsData = [
  "Medical",
  "Lifestyle",
  "Learn",
  "Healthy",
  "Food",
  "Diet",
  "Education",
];

const ArticleDetailPage = () => {
  return (
    <div>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <Image
            src={images.Post1}
            className="rounded-xl w-full"
            alt="post-image-detail"
          />
          <Link
            href="/article?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
          >
            Education
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Help children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              dolorum impedit, doloremque repudiandae nisi id modi quam esse
              explicabo laborum obcaecati illo consequuntur iste iure velit
              deleniti tempore et ducimus eos. Accusamus deleniti nulla tempora,
              debitis omnis, fugit aperiam, possimus fugiat cupiditate
              doloremque molestiae architecto nihil explicabo dolor quisquam
              voluptate? Ad hic repudiandae vel, molestias fuga ratione nobis
              fugit totam voluptatum, aperiam saepe architecto, assumenda
              cupiditate aliquid numquam placeat? Sunt perspiciatis
              necessitatibus molestiae, fugiat, sit ea beatae, ducimus numquam
              sed recusandae ex sapiente? Cumque id repudiandae nostrum
              voluptatibus delectus quae? Eos, alias? Totam omnis ratione
              deserunt placeat officia impedit in aspernatur repellendus
              explicabo nesciunt, voluptatem animi reiciendis recusandae facere
              quia quisquam quis rem ipsam mollitia saepe porro laudantium.
              Aperiam, consequatur.
            </p>
          </div>
          <CommentsContainer className="mt-10" logginedUserId="a" />
        </article>
        <SuggestedPosts
          header="Latest Article"
          posts={postsData}
          tags={tagsData}
          className="mt-8 lg:mt-0 lg:max-w-xs"
        />
      </section>
    </div>
  );
};

export default ArticleDetailPage;
