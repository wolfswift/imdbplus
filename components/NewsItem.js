import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/NewsItem.module.scss"
import RelatedItemGallery from "./RelatedItemGallery"



const NewsItem = ({ data, level }) => {
  var movies = [];
  var personalities = [];
  //enriching data
  if (level === 'data') {
    var content = data.story.content;
    movies = data.rels.filter(obj => {
      return content.movies.includes(obj.uuid);
    });
    personalities = data.rels.filter(obj => {
      return content.personalities.includes(obj.uuid);
    });
  } else {
    var content = data;
  }
  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.newsitem}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}>
          </div>
          <div className={styles.short}>
            {render(content.short)}
          </div>
          <div className={styles.article}>
            {render(content.article)}
          </div>
          <RelatedItemGallery items={movies} title="Related Movies" type="movie"></RelatedItemGallery>
          <RelatedItemGallery items={personalities} title="Related Stars" type="personality"></RelatedItemGallery>
      
        </div>
      </main>
    </SbEditable>
  )
}

export default NewsItem
