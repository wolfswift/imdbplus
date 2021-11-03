const Navigation = ({ locale, locales }) => {
  const resolveHome = {
    en: 'Home',
    nl: 'Home pagina',
  }
  const resolveAbout = {
    en: 'About',
    nl: 'Over',
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
            <button className="" type="button">
                <title>Menu</title>
            </button>
          </div>
          <div className="">
            <ul className="">
              <li>
                <a href={`${defaultLocale}`} className="">{resolveHome[locale]}</a>
              </li>
              <li>
                <a href={`${defaultLocale}blog`} className="">Blog</a>
              </li>
              <li>
                <a href={`${defaultLocale}about`} className="">{resolveAbout[locale]}</a>
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
