import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Jobs from './components/Jobs'
function App() {
  const [count, setCount] = useState(0)

  const tabObj=[
  { name:"Bob", age:26},
  { name:"Jacques", age:56},
  { name:"Marie", age:22},
  { name:"Sandrine", age:30},
  ];
  


  return (
    <><Header name={"The Job Board"} />
  <Jobs/>
  <Footer />
  {tabObj.map((elem,index)=>{
  return <p key={index}>Bonjour, Je suis {elem.name} et j'ai {elem.age} ans. </p>
  })}
  </>
    )
}

export default App
