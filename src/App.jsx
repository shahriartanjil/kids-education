import Navbar from "./components/shared/navbar"
import Hero from "./components/hero/hero"
import StandardCurriculum from "./components/StandardCurriculum"
import OurStories from "./components/OurStories"
import Footer from "./components/shared/Footer"

// import AboutSection from "./components/about/About"
// import FacilitiesSection from "./components/facilities/Facilities"




function App() {


  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <StandardCurriculum />
        <OurStories />
        <Footer />
        
        {/* <AboutSection />
        <FacilitiesSection /> */}


      </div>

    </>
  )
}

export default App
