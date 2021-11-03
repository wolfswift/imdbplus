import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Movie.module.scss"


const Movie = ({ data }) => {
  var content = data.story.content;
  var directors = data.rels.filter(obj => {
    return content.directors.includes(obj.uuid);
  });
  var stars = data.rels.filter(obj => {
    return content.stars.includes(obj.uuid);
  });
  var writers = data.rels.filter(obj => {
    return content.writers.includes(obj.uuid);
  })
  var studios = data.rels.filter(obj => {
    return content.studios.includes(obj.uuid);
  })
  var genres = data.rels.filter(obj => {
    return content.genres.includes(obj.uuid);
  })
  var pictures = content.pictures;

  return (
    <SbEditable content={content} key={content._uid}>
      {/* <div className={[styles.movie, styles.test].join(' ')}> */}
      <div className={styles.movie}>
        <h1 className={styles.title}>
          {content.title}
        </h1>
      </div>

      <div className={styles.synopsis}>
        {render(content.synopsis)}
      </div>
      <div>
        {directors.map((item, index) => (
          <p>{item.name}</p>
        ))}
      </div>
      <div>
        {writers.map((item, index) => (
          <p>{item.name}</p>
        ))}
      </div>
      <div>
        {stars.map((item, index) => (
          <p>{item.name}</p>
        ))}
      </div>
      <div>
        {studios.map((item, index) => (
          <p>{item.content.title}</p>
        ))}
      </div>
      <div>
        {genres.map((item, index) => (
          <p>{item.content.title}</p>
        ))}
      </div>
      <div>
        {pictures.map((item, index) => (
          <img src={item.filename}/>
        ))}
      </div>
    </SbEditable>
  )
}

export default Movie
