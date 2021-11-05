import Head from '../components/Head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Layout = ({ children, locale, locales, data }) => {

  let title = "IMDBPlus";
  if (data && data.story) {
    if (data.story.content && data.story.content.title) {
      title = data.story.content.title;
    } else if (data.story.name) {
      title = data.story.name;
    }
  }
  let description = "description for page";
  return (
    <div className="">
      <Head title={title} description={description} />
      <Navigation locale={locale} locales={locales} />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
