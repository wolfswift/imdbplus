import React, {useState} from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Studio.module.scss"
import Storyblok, { useStoryblok, getData } from "../utils/storyblok"



const Studio = ({ data }) => {

  //enriching data
  var content = data.story.content;
  const [movies, setMovies] = useState([]);
  var self = this;
  getData(data.story.uuid, data.story.lang, content.preview = false, 'movie').then(
    function (result) {
      setMovies(result.data.stories);
    });

  //returning the HTML
  return (
    <SbEditable content={content} key={data.uuid}>
      {/* <div className={[styles.movie, styles.test].join(' ')}> */}
      <div className={styles.studio}>
        <h1 className={styles.title}>
          {content.title}
        </h1>
      </div>
      <div className={styles.logo}>
        <img src={content.logo.filename} />
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
    </SbEditable>
  )
}

export default Studio
