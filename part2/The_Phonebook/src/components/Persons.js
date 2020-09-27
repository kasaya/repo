import React from 'react'
import personService from '../service/persons'
const Persons = ({ selecter, persons, setPersons ,setErrorMessage}) => {
   const showlist = () => selecter === '' ? persons : persons.filter(persion => persion.name.toLowerCase().includes(selecter.toLowerCase()))
   const deletPersion = (id, name) => {
      if (window.confirm(`Delete ${name}?`)) {
         personService.deletePerson(id).then(data => {
            setPersons(persons.filter(person => person.id !== id))
         }).catch(error=>{
            setErrorMessage({
               message: `Information of ${name}has already been removed from server`,
               type:'error'
            })
         })
      }
   }
   return (
      <>
         {showlist().map(person => <div key={person.id}>
            {person.name} {person.number}
            <button onClick={() => {deletPersion(person.id, person.name)}}>delete</button>
         </div>)}
      </>
   )
}
export default Persons