import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Movie.module.scss"

const Movie = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      {/* <div className={[styles.movie, styles.test].join(' ')}> */}
      <div className={styles.movie}>
        <h1 className={styles.title}>
          {blok.title}
        </h1>
      </div>

      <div className={styles.synopsis}>
        {render(blok.synopsis)}
      </div>
    </SbEditable>
  )
}

export default Movie
