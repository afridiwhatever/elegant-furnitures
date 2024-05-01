import React from "react";
import ArticleCard from "./ArticleCard";
import ShopNowButton from "./ShopNowButton";

const articles = [
  {
    id: 1,
    title: "7 ways to decor your home",
    link: "/blog/ways-to-decor",
    imageUrl: "/articles/decor-article-featured-image.jpg",
  },
  {
    id: 2,
    title: "Kitchen organization",
    link: "/blog/kitchen-organization",
    imageUrl: "/articles/kitchen-featured-image.jpg",
  },
  {
    id: 3,
    title: "Decor your bedroom",
    link: "/blog/decor-your-bedroom",
    imageUrl: "/articles/bedroom-featured-image.jpg",
  },
];

const Articles = () => {
  return (
    <div className="mt-10 lg:mt-20">
      <div className="flex justify-between items-end">
        <h2 className="font-poppins text-3xl lg:text-5xl">Articles</h2>
        <div className="hidden md:block">
          <ShopNowButton
            to={"/blog"}
            buttonText="More Articles"
            color="black"
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row gap-12">
        {articles.map((article) => {
          return (
            <ArticleCard
              key={article.id}
              title={article.title}
              link={article.link}
              imageUrl={article.imageUrl}
            />
          );
        })}
      </div>
      <div className="mt-6 block md:hidden">
        <ShopNowButton to={"/blog"} buttonText="More Articles" color="black" />
      </div>
    </div>
  );
};

export default Articles;
