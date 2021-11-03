import React from "react";
import SbEditable from "storyblok-react";

const FeaturedPosts = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="" key={blok._uid}>
        <div className="">
          <h2 className="">
            {blok.title}
          </h2>
          <div className="" />
        </div>
        <ul className="">
          {blok.posts.map((post) => {
            const lang = post.lang === "default" ? "/en" : `/${post.lang}`;

            return (
              <li key={post.slug} className="">
                <a
                  href={`${lang}/blog/${post.slug}`}
                  className=""
                >
                  <img src={post.content.image} className="" />
                  <h2 className="">
                    {post.content.title}
                  </h2>
                  <p className="">
                    {post.content.intro}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </SbEditable>
  );
};

export default FeaturedPosts;
