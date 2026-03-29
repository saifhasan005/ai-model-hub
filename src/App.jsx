
import { useState } from 'react'
import './App.css'
import Cards from './Components/Card/Cards'
import Banner from './Components/Navbar/Banner/Banner'
import Footer from './Components/Navbar/Footer/Footer'
import NavBar from './Components/Navbar/Navbar'
import Cart from './Components/Cart/Cart'
import { ToastContainer } from 'react-toastify'

const getModels = async () =>{
  const response = await fetch ("/models.json")
  return response.json();
}
const modelPromise = getModels();
function App() {
const [activeTab, setactiveTab] = useState('model');
// console.log(activeTab);
const [selectedData, setselectedData] = useState([]);
// console.log(selectedData);
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <div className='tabs gap-[20px] tabs-box justify-center bg-transparent'>
        <input type="radio" name='my_tabs_1' className='bg-red-500 text-white font-bold tab rounded-full w-40' aria-label='Models' defaultChecked onClick={()=> setactiveTab('model')}/>
        <input type="radio" name='my_tabs_1' className='shadow-xl font-bold tab rounded-full w-40' aria-label={`Cart (${selectedData.length})`} onClick={()=> setactiveTab('cart')}/>
      </div>
      { activeTab =="model" ? <Cards setselectedData={setselectedData} selectedData={selectedData} modelPromise={modelPromise}></Cards> : ""}
      {activeTab == "cart" ? <Cart setselectedData={setselectedData}  selectedData={selectedData}></Cart>:""}
      <Footer></Footer>
      <ToastContainer ></ToastContainer>
    </>
  )
}

export default App
