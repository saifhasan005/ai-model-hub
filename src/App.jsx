
import './App.css'
import Cards from './Components/Card/Cards'
import Banner from './Components/Navbar/Banner/Banner'
import Footer from './Components/Navbar/Footer/Footer'
import NavBar from './Components/Navbar/Navbar'

const getModels = async () =>{
  const response = await fetch ("/models.json")
  return response.json();
}
const modelPromise = getModels();
function App() {

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Cards modelPromise={modelPromise}></Cards>
      <Footer></Footer>
    </>
  )
}

export default App
