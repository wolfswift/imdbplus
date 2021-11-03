import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'

const Grid = ({blok}) => (
  <SbEditable content={blok}>
    <ul className="">
      {blok.columns.map((nestedBlok) => (
          <li key={nestedBlok._uid} className="">
            <DynamicComponent blok={nestedBlok} />
          </li>
        )
      )}
    </ul>
  </SbEditable>
)

export default Grid
