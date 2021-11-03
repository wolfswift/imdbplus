import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Personality.module.scss"

const Personality = ({ data }) => {
  var content = data.story.content;
  
  // var genres = data.rels.filter(obj => {
  //   return content.genres.includes(obj.uuid);
  // })
  var pictures = content.pictures;

  return (
    <SbEditable content={content} key={content._uid}>
      {/* <div className={[styles.movie, styles.test].join(' ')}> */}
      <div className={styles.personality}>
        <h1 className={styles.title}>
          {content.first_name} {content.last_name}
        </h1>
      </div>

      <div className={styles.bio}>
        {render(content.bio)}
      </div>
      
      <div>
        {pictures.map((item, index) => (
          <img src={item.filename}/>
        ))}
      </div>
    </SbEditable>
  )
}

export default Personality
