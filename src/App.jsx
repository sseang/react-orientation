import { useState } from 'react';
import './App.css'
import Footer from './components/Footer/Footer';
import Card  from './components/components/Card/Card';
import Logo  from './components/Logo/Logo';



function App() {
  const [globalName, setGlobalName] = useState();

  const clickGlobalNameChange = () => {
    setGlobalName('GLOBAL!!!!');
  }

  return (
    <>
    <Logo/>

    <button onClick={clickGlobalNameChange}>CHANGE ALL NAMES</button>
    <Card globalName={globalName}/>
    <Card globalName={globalName}/>

    <Footer/>
    </>
  )
}

export default App
