import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import {About, Contact, Experience, Hero, Navbar, Skills, Work, StarsCanvas, Credit} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className = "relative z-0 bg-primary overflow-x-hidden min-w-[320px]"> 
        <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Skills />
        <Work />

        <div className = "relative z-0"> 
          <Contact />
          <StarsCanvas />
        </div>
        <Credit />
      </div>
      <Analytics />
    </BrowserRouter>
  )
}

export default App