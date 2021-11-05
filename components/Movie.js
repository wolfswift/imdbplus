import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Movie.module.scss"
import { getData } from "../utils/storyblok"



const Movie = ({ data, level }) => {

  //enriching data
  if (level === 'data') {
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
  } else {
    var content = data;
  }

  const [products, setProducts] = useState([]);
  getData(data.story.uuid, data.story.lang, content.preview = false, 'product', 'movies').then(
    function (result) {
      setProducts(result.data.stories);
    });

  const [newsitems, setNewsitems] = useState([]);
  getData(data.story.uuid, data.story.lang, content.preview = false, 'newsitem', 'movies').then(
    function (result) {
      setNewsitems(result.data.stories);
    });

  var pictures = content.pictures;

  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
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
            <div>
              <a href={`/${item.full_slug}`} className="">{item.name}</a>
            </div>
          ))}
        </div>
        <div>
          {writers.map((item, index) => (
            <div>
              <a href={`/${item.full_slug}`} className="">{item.name}</a>
            </div>
          ))}
        </div>
        <div>
          {stars.map((item, index) => (
            <div>
              <a href={`/${item.full_slug}`} className="">{item.name}</a>
            </div>
          ))}
        </div>
        <div>
          {studios.map((item, index) => (
            <div>
              <a href={`/${item.full_slug}`} className="">{item.name}</a>
            </div>
          ))}
        </div>
        <div>
          {genres.map((item, index) => (
            <div>
              <a href={`/${item.full_slug}`} className="">{item.name}</a>
            </div>
          ))}
        </div>
        <div>
          {pictures.map((item, index) => (
            <img src={item.filename} />
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

export default Movie
