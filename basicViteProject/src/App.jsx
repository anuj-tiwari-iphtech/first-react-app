
import Welcome from "./Components/Welcome"
import Navbar from "./Components/Navbar"
import Student from "./Components/Student"
import Employee from "./Components/Employee"
import Footer from "./Components/Footer"
import Name from "./Components/Name"
import College from "./Components/College"
import City from "./Components/City"
import Skills from "./Components/Skills"
import Hobbies from "./Components/Hobbies"


const name = "Anuj"

function App() {
  
  return (
    <>
      <h1>Hello {name}</h1>
      <Welcome/>
      <Navbar/>
      <Student/>
      <Employee/>
      
      <hr/>

      <Name/>
      <College/>
      <City/>
      <Skills/>
      <Hobbies/>

      <Footer/>
    </>
  )
}

export default App
