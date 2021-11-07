import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/MovieList.module.scss"
import { getAllItems } from "../utils/storyblok"

const MovieList = ({ data, level }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  const [items, setItems] = useState([]);
  getAllItems('movie').then(
    function (result) {
      setItems(result.data.stories);
    });

  return (

    <div className={styles.list}>
      {items.map((item) => {
        const lang = item.lang === "default" ? "/en" : `/${item.lang}`;
        return (
          <a
            href={`${lang}/movie/${item.slug}`}
          >
            <div
              key={item.slug}
              className={styles.item}
            >
              <div className={styles.date}>
                <span className="">
                  {`
                    ${new Date(item.created_at).getDay()}.
                    ${new Date(item.created_at).getMonth()}.
                    ${new Date(item.created_at).getFullYear()}`}
                </span>
              </div>
              <div className={styles.mainpart}>

                <h2 className={styles.title}>
                  {item.content.title}
                </h2>

                <p className={styles.summary}>{render(item.content.short)}</p>
              </div>
            </div>
          </a>
        );
      })}
    </div>

  );
};

export default MovieList;
