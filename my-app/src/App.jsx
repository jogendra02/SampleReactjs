import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomCard from './Components/CustomCard/CustomCard'
import Header from './Components/CustomCard/Header/Header'
import CustomTabs from './Components/CustomTabs/CustomTabs'
import CustomCard1 from './Components/CustomCard/CustomCard1'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <CustomTabs></CustomTabs>
      
      
      
      <CustomCard/>
      <CustomCard1/>
    </>
  )
}

export default App
