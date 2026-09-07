import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Stats from '../components/sections/Stats'
import TechStack from '../components/sections/TechStack'
import Skills from '../components/sections/Skills'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Services from '../components/sections/Services'
import Education from '../components/sections/Education'
import Certifications from '../components/sections/Certifications'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'

export default function Home({ portfolio }) {
  const enabled = (key, localEnabled = true) => portfolio.sections?.[key] !== false && localEnabled !== false
  return (
    <main id="main-content">
      {enabled('hero', portfolio.hero.enabled) && <Hero hero={portfolio.hero} personal={portfolio.personal} socials={portfolio.socials} ui={portfolio.ui} />}
      {enabled('about', portfolio.about.enabled) && <About about={portfolio.about} />}
      {enabled('stats', portfolio.stats.enabled) && <Stats stats={portfolio.stats} />}
      {enabled('techStack', portfolio.techStack.enabled) && <TechStack techStack={portfolio.techStack} />}
      {enabled('skills', portfolio.skills.enabled) && <Skills skills={portfolio.skills} />}
      {enabled('experience', portfolio.experience.enabled) && <Experience experience={portfolio.experience} />}
      {enabled('projects', portfolio.projects.enabled) && <Projects projects={portfolio.projects} />}
      {enabled('services', portfolio.services.enabled) && <Services services={portfolio.services} />}
      {enabled('education', portfolio.education.enabled) && <Education education={portfolio.education} />}
      {enabled('certifications', portfolio.certifications.enabled) && <Certifications certifications={portfolio.certifications} />}
      {enabled('testimonials', portfolio.testimonials.enabled) && <Testimonials testimonials={portfolio.testimonials} />}
      {enabled('contact', portfolio.contact.enabled) && <Contact contact={portfolio.contact} socials={portfolio.socials} />}
    </main>
  )
}
