import './App.css'
import Header from './components/header-section/header'
import Hero from './components/hero-section/hero'
import About from './components/about-section/about'
import Ekstrakurikuler from './components/ekstrakurikuler-section/ekstrakurikuler'
import Trainers from './components/trainers-section/trainers'
import Contact from './components/contact-section/contact'
import Register from './components/form-section/form'
import Footer from './components/footer-section/footer'
import './index.css';

function App() {

  return (
    <main id='main'>
      <body>

        <div>
          <Header />
          <Hero />
          <About />
          <Ekstrakurikuler />
          <Trainers />
          <Contact />
          <Register />
          <Footer />
        </div>
        {/* Contact Section */}

        {/* End Contact Section */}

        {/* Form Regist Section */}

        {/* End Form Regist */}
      </body>
    </main >
  )
}

export default App
