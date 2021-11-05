import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Personality.module.scss"
import { getData } from "../utils/storyblok"

const Personality = ({ data,level }) => {
  if(level==='data'){
    var content = data.story.content;
  } else {
    var content = data;
  }

  const [products, setProducts] = useState([]);
  getData(data.story.uuid, data.story.lang, content.preview = false, 'product', 'personalities').then(
    function (result) {
      setProducts(result.data.stories);
    });

  const [newsitems, setNewsitems] = useState([]);
  getData(data.story.uuid, data.story.lang, content.preview = false, 'newsitem', 'personalities').then(
    function (result) {
      setNewsitems(result.data.stories);
    });
  
  // var genres = data.rels.filter(obj => {
  //   return content.genres.includes(obj.uuid);
  // })
  var pictures = content.pictures;

  return (
    <SbEditable content={content} key={content._uid}>
      <main>
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

      <div>
        {products.map((item, index) => (
          <div>
            <a href={`/${item.full_slug}`} className="">{item.content.title}</a>
          </div>
        ))}
      </div>
      <div>
        {newsitems.map((item, index) => (
          <div>
            <a href={`/${item.full_slug}`} className="">{item.content.title}</a>
          </div>
        ))}
      </div>
      </main>
    </SbEditable>
  )
}

export default Personality
