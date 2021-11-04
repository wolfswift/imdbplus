import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'

const Page = ({ data, level }) => {
  if(level==='data'){
    var content = data.story.content;
  } else {
    var content = data;
  }
  return (
    <SbEditable content={content}>
      <main>
        {content.body ? content.body.map((content) =>
          <DynamicComponent data={content} key={content._uid} />
        ) : null}
      </main>
    </SbEditable>
  )
}


export default Page
