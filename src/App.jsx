import portfolio from './data/portfolio.json'
import Home from './pages/Home'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import BackToTop from './components/layout/BackToTop'
import { useTheme } from './hooks/useTheme'
import { useActiveSection } from './hooks/useActiveSection'
import { useScrollProgress } from './hooks/useScrollProgress'
import { useDocumentMeta } from './hooks/useDocumentMeta'

export default function App() {
  const { theme, setTheme } = useTheme(portfolio.theme)
  const activeSection = useActiveSection(portfolio.navigation)
  const progress = useScrollProgress()
  useDocumentMeta(portfolio.meta, portfolio.personal)

  return (
    <>
      <a href="#main-content" className="skip-link">{portfolio.ui.skipLink}</a>
      <ScrollProgress progress={progress} label={portfolio.ui.scrollProgress} />
      <Navbar brand={portfolio.brand} navigation={portfolio.navigation} activeSection={activeSection} theme={theme} setTheme={setTheme} themeConfig={portfolio.theme} ui={portfolio.ui} />
      <Home portfolio={portfolio} />
      <Footer footer={portfolio.footer} socials={portfolio.socials} brand={portfolio.brand} ui={portfolio.ui} />
      <BackToTop show={progress > 0.12} label={portfolio.ui.backToTop} />
    </>
  )
}
