

import './App.css'

import data from "../data.json"

import Section from './assets/Components/Section'

function App() {
  return (
    <>    
    <header>
      <img src="img/logo.png" alt="" />
    </header>

    {data.map((elem)=>{
    //  console.log(elem.category);
return (
<Section elem = {elem} key={elem.category}/>


);

    })}  

      
     


    </>
  )
}

export default App
