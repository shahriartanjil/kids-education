import Navbar from "./components/shared/navbar"
import Hero from "./components/hero/hero"
import StandardCurriculum from "./components/StandardCurriculum"
import OurStories from "./components/OurStories"
import Footer from "./components/shared/Footer"
// import About from "./components/about/About"
 


function App() {


  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <StandardCurriculum />
        <OurStories />
        <Footer />
        {/* <About /> */}
        
        
      </div>

    </>
  )
}

export default App
