import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShowPart from './components/ShowPart'


const App = () => {
  const [ countrys, setCountrys ] = useState([]) 
  const [ selecter, setSelecter] = useState('')

  useEffect(()=>{
    if(selecter !== ''){
      axios
      .get(`https://restcountries.eu/rest/v2/name/${selecter}`)
      .then(response=>{
        setCountrys(response.data)
      })
    }else{
      axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response=>{
        setCountrys(response.data)
      })
    }
    
  },[selecter])

  console.log(countrys)

  const select = (event)=>{
    console.log(event.target.value)
    setSelecter(event.target.value)
  }

  return (
    <div>
        <div>
         find countries<input value = {selecter} onChange={select}/>   
        </div>
        <ShowPart countries={countrys} handle={setCountrys}></ShowPart>
    </div>
  )
}

export default App