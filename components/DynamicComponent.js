import Teaser from './Teaser'
import Feature from './Feature'
import FeaturedPosts from './FeaturedPosts'
import Grid from './Grid'
import Placeholder from './Placeholder'
import PostsList from './PostsList'
import Page from './Page'
import BlogPost from './BlogPost'
import Text from './Text'
import Movie from './Movie'
import Personality from './Personality'
import Studio from './Studio'
import Genre from './Genre'
import Country from './Country'

const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'featured-posts': FeaturedPosts,
  'page': Page,
  'post': BlogPost,
  'text': Text,
  'selected-posts': PostsList,
  'movie': Movie,
  'personality': Personality,
  'studio': Studio,
  'genre' : Genre,
  'country' : Country
}


const DynamicComponent = ({ data }) => {
  let componentType='undefined';
  if(data&&data.story&&data.story.content){
    componentType = data.story.content.component;
  } else if(data&&data.component){
    componentType = data.component;
  }
  if (componentType !== 'undefined') {
    const Component = Components[componentType]
    return <Component data={data} />
  }
  return <Placeholder componentName={componentType}/>
}

export default DynamicComponent
