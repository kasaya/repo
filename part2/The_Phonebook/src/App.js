import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import MessageBox from './components/MessageBox'
import personService from './service/persons'
import './index.css'

const App = () => {

  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ selecter, setSelecter] = useState('')
  const [ msgInfo,setMsgInfo] = useState({})

  const showMessageBox = (msgInfo) =>{
    console.log(msgInfo)
    setMsgInfo(msgInfo)
    setTimeout(() => {
      setMsgInfo({})
    }, 5000)
  }
  
  useEffect(()=>{
    personService.initPerson().then(data=>setPersons(data))
  },[])


  return (
    <div>
      <h2>Phonebook</h2>
        <MessageBox msgInfo={msgInfo}></MessageBox>
        <Filter selecter={selecter} handle={setSelecter}></Filter>
        <h2>add a new</h2>
        <PersonForm 
            newName={newName} 
            newNum={newNum} 
            persons={persons}
            setNewName={setNewName}
            setNewNum={setNewNum}
            setPersons={setPersons}
            setInfoMessage={showMessageBox}
        >
        </PersonForm>
      
        <h2>Numbers</h2>
        <Persons selecter={selecter} 
        persons={persons} 
        setPersons={setPersons}
        setErrorMessage={showMessageBox}></Persons>
    </div>
  )
}

export default App