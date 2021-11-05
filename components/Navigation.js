const Navigation = ({ locale, locales }) => {
  const resolveHome = {
    en: 'Home',
    nl: 'Home pagina',
  }
  const resolveMovies = {
    en: 'Movies',
    nl: 'Films',
  }
  const resolvePeople = {
    en: 'People',
    nl: 'Mensen',
  }
  const resolveNews = {
    en: 'News',
    nl: 'Nieuws',
  }
  const resolveMerchandise = {
    en: 'Shop',
    nl: 'Winkel',
  }
  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`
  return (
    <header className="">
      <nav className="" role="navigation">
        <div className="">
          <div className="">
            <a href="/">
              <img
                src="https://a.storyblok.com/f/133261/3039x582/a60d166ec2/logo-colored-full.png/m/200x0"
                alt="IMDBPlus Logo"
                className=""
              />
            </a>
          </div>
          <div className="">
            <ul className="">
              <li>
                <a href={`${defaultLocale}`} className="">{resolveHome[locale]}</a>
              </li>
              <li>
                <a href={`${defaultLocale}pages/movies`} className="">{resolveMovies[locale]}</a>
              </li>
              <li>
                <a href={`${defaultLocale}pages/people`} className="">{resolvePeople[locale]}</a>
              </li>
              <li>
                <a href={`${defaultLocale}pages/news`} className="">{resolveNews[locale]}</a>
              </li>
              <li>
                <a href={`${defaultLocale}pages/shop`} className="">{resolveMerchandise[locale]}</a>
              </li>
            </ul>
            <ul className="">
              {
                locales.map(loc => {
                  return (<li key={loc}>
                    <a href={`/${loc}`} className={`${locale === loc ? "selected" : ""}`}>{loc}</a>
                  </li>)
                })
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
