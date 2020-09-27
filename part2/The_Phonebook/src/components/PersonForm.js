import React from 'react'
import personService from '../service/persons'
const PersonForm = ({ setNewName, setNewNum, setPersons, persons, newName, newNum ,setInfoMessage}) => {

  const addName = (event) => {
    event.preventDefault()

    let addPerson = persons.find(person => person.name === newName)
    if (addPerson !== undefined) {

      if (window.confirm(`${addPerson.name} is already added to phonebook,replace the old number with a new one?`)) {

        const newPerson = {
          ...addPerson,
          number: newNum
        }
        personService.updatePerson(addPerson.id, newPerson)
          .then(data => {
            setPersons(persons.map(person => person.id === addPerson.id ? data : person))
          }).catch(error=>{
            setInfoMessage({
              message:`Information of ${newPerson.name} has already been removed from server`,
              type: 'error'})
         })
          setInfoMessage({message:`Updated ${newPerson.name}`, type:'info'})
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNum
      }
      personService.createPerson(newPerson).then(newResult => {
        setPersons(persons.concat(newResult))
        setNewName("")
        setNewNum("")
      })
      setInfoMessage({message:`Added ${newName}`, type: 'info' })
    }
    

  }
  return (
    <>
      <form>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input value={newNum} onChange={(event) => setNewNum(event.target.value)} />
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
    </>
  )
}
export default PersonForm