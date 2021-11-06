import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Product.module.scss"
import Storyblok, { useStoryblok, getData } from "../utils/storyblok"
import RelatedItem from "./RelatedItem"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"


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
  return (
    <SbEditable content={content} key={data.uuid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.product}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className={styles.producthead}>
            <div className={styles.producthead_first}>
              <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}>
              </div>
            </div>
            <div className={styles.producthead_second}>
              <div className={styles.price}>
                ${content.price}
              </div>
              <div className={styles.short}>
                {render(content.short)}
              </div>
            </div>
          </div>


          <div className={styles.imagegallery}>
            <InPageSlideshow pictures={content.pictures}></InPageSlideshow>
          </div>

          <div className={styles.description}>
            <div className={styles.title}>Description</div>
            <div className={styles.content}> {render(content.description)}</div>
           
          </div>
          
          {movies && movies.length > 0 && <RelatedItemGallery items={movies} title="Related Movies" type="movie"></RelatedItemGallery>}
          {personalities && personalities.length > 0 && <RelatedItemGallery items={personalities} title="Related Stars" type="personality"></RelatedItemGallery>}
        </div>
      </main>
    </SbEditable>
  )
}

export default Product
