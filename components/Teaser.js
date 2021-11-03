import React from 'react'
import SbEditable from 'storyblok-react'
 
const Teaser = ({blok}) => {
  return (
    <SbEditable content={blok}>
      <div className="">
        <div className="">
          <h2 className="">{blok.headline}</h2>
          <figure>
            <img src={blok.image.filename}
            alt={blok.image.alt} className="" />
            <figcaption class="">{blok.caption}</figcaption>
          </figure>
        </div>
      </div>
    </SbEditable>
  )
}
 
export default Teaser