import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Personality.module.scss"

const Personality = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      {/* <div className={[styles.movie, styles.test].join(' ')}> */}
      <div className={styles.personality}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.titleContent}>
            {blok.first_name} {blok.last_name}
          </h1>
        </div>
      </div>
      <div className={styles.bioWrapper}>
        <div className={styles.bioContent}>
          {render(blok.bio)}
        </div>
      </div>
    </SbEditable>
  )
}

export default Personality
