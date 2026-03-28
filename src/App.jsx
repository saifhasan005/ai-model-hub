
import './App.css'
import Banner from './Components/Navbar/Banner/Banner'
import Footer from './Components/Navbar/Footer/Footer'
import NavBar from './Components/Navbar/Navbar'

const getModels = async () =>{
  const response = await fetch ("/models.json")
  return response.json();
}
function App() {

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Footer></Footer>
    </>
  )
}

export default App
