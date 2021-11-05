import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Product.module.scss"
import Storyblok, { useStoryblok, getData } from "../utils/storyblok"



const Product = ({ data, level }) => {
  if (level === 'data') {
    var content = data.story.content;
    var movies = data.rels.filter(obj => {
      return content.movies.includes(obj.uuid);
    });
    var personalities = data.rels.filter(obj => {
      return content.personalities.includes(obj.uuid);
    });
  } else {
    var content = data;
  }

  // const [movies, setMovies] = useState([]);
  // getData(data.story.uuid, data.story.lang, content.preview = false, 'movie').then(
  //   function (result) {
  //     setMovies(result.data.stories);
  //   });
  // const [personalities, setPersonalities] = useState([]);
  // getData(data.story.uuid, data.story.lang, content.preview = false, 'personality').then(
  //   function (result) {
  //     setPersonalities(result.data.stories);
  //   });
  //returning the HTML
  return (
    <SbEditable content={content} key={data.uuid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.product}>
          <h1 className={styles.title}>
            {content.title}
          </h1>

          <div className={styles.price}>
            {content.price}
          </div>
          <div className={styles.pictures}>
            {content.pictures.map((item, index) => (
              <div className={styles.picture} key={index}>
                <img src={item.filename} />
              </div>
            ))}
          </div>
          <div className={styles.short}>
            {render(content.short)}
          </div>
          <div className={styles.description}>
            {render(content.description)}
          </div>
          <div>
            {movies.map((item, index) => (
              <div>
                <a href={`/${item.full_slug}`} className="">{item.content.title}</a>
              </div>
            ))}
          </div>
          <div>
            {personalities.map((item, index) => (
              <div>
                <a href={`/${item.full_slug}`} className="">{item.content.first_name} {item.content.last_name}</a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </SbEditable>
  )
}

export default Product
