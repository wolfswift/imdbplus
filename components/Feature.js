import React from 'react'
import SbEditable from 'storyblok-react'
import DynamicIcon from './icons/DynamicIcon'

const Feature = ({blok}) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="">
            <DynamicIcon type={blok.icon} />
            <div className="">
                <div className="">{blok.name}</div>
                <p className="">
                  {blok.description}
                </p>
            </div>
        </div>
    </SbEditable>
  )
}

export default Feature
