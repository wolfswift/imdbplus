import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/NewsItem.module.scss"



const NewsItem = ({ data, level }) => {

  //enriching data
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }

  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      {/* <div className={[styles.movie, styles.test].join(' ')}> */}
      <div className={styles.movie}>
        <h1 className={styles.title}>
          {content.title}
        </h1>
        <div className={styles.short}>
          {render(content.short)}
        </div>
        <div className={styles.article}>
          {render(content.article)}
        </div>
      </div>
    </SbEditable>
  )
}

export default NewsItem
