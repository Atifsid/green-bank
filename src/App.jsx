import Header from "./components/Header"
import Hero from "./components/Hero"
import Process from "./components/Process"
import Record from "./components/Record"
import Services from "./components/Services"
import Testimonial from "./components/Testimonial"

function App() {
  return (
    <main className="relative">
      {/* <GreenString /> */}
      <Header />
      <Hero />
      <Record />
      <Services />
      <Process />
      <Testimonial />
    </main>
  )
}

export default App
