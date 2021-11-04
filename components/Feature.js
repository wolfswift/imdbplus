import React from 'react'
import SbEditable from 'storyblok-react'
import DynamicIcon from './icons/DynamicIcon'

const Feature = ({data}) => {
  var content = data;
  return (
    <SbEditable content={content} key={content._uid}>
      <div className="">
            <DynamicIcon type={content.icon} />
            <div className="">
                <div className="">{content.name}</div>
                <p className="">
                  {content.description}
                </p>
            </div>
        </div>
    </SbEditable>
  )
}

export default Feature
