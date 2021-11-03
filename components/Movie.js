import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Movie.module.scss"

export async function getStaticProps({ locale, locales, params, preview = false }) {
  let slug = params.slug ? params.slug.join('/') : 'home'

  let sbParams = {
    version: "draft", // or 'draft'
    resolve_relations: ["featured-posts.posts", "selected-posts.posts", "directors"],
    language: locale,
  }
 
  if (preview) {
    sbParams.version = "draft"
    sbParams.cv = Date.now()
  }
 
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams)
 
  return {
    props: {
      story: data ? data.story : false,
      preview,
      locale,
      locales,
    },
    revalidate: 3600, // revalidate every hour
  }
}

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
