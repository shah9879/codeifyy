import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientTicker from './components/ClientTicker'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import Stats from './components/Stats'
import Industries from './components/Industries'
import Solutions from './components/Solutions'
import CaseStudies from './components/CaseStudies'
import EngagementModels from './components/EngagementModels'
import Awards from './components/Awards'
import Tools from './components/Tools'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Articles from './components/Articles'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <FloatingCTA />
      <Navbar />
      <Hero />
      <ClientTicker />
      <WhyUs />
      <Services />
      <Stats />
      <Industries />
      <Solutions />
      <CaseStudies />
      <EngagementModels />
      <Awards />
      <Tools />
      <Testimonials />
      <Process />
      <Articles />
      <Faqs />
      <Footer />
    </>
  )
}