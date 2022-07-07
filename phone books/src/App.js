import { useState, useEffect } from "react";
import PersonForm from "./component/PersonForm";
import Person from "./component/Person";
import Filter from "./component/Filter";
import persons from "./services/persons"

const App = () => {
    const [person, setPerson] = useState([])
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [search, setSearch] = useState("")

    useEffect(() => {
        persons.getAll().then(response => setPerson(response.data))
    }, [person])

    const handleSearchChange = event => {
        let s = event.target.value
        setSearch(s)
        const regex = new RegExp( search, 'i' )
        const filteredPersons = () => person.filter(person => person.name.match(regex))
        setPerson(filteredPersons)
    }
    
    const handleNumberChange = event => {
        setNewNumber(event.target.value)
    }
    const handleNameChange = event => {
        setNewName(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        const newNameObject = {
            name: newName,
            number: newNumber
        }
        if (person.length > 1) {
            if (person.some(e => e.name === newName)) {
                alert(`${newName} already exists`)
                setNewName("")
                setNewNumber("")
                return
            }
        }
        persons.create(newNameObject) 
          .then(response => {
            setPerson (person.concat(response.data))
            setNewName("")
            setNewNumber("")
          })
    }
    
    return (
        <div>
            <h1>Phonebook</h1>
            <Filter
                type="search" 
                id="searchInput"
                value={search}
                onChange={handleSearchChange}
            />
            <h2>Add new</h2>
            <PersonForm
                onSubmit={handleSubmit}
                newName={newName}
                handleNumberChange={handleNumberChange}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                type="submit"
            />
            <h2>Numbers</h2>
            <ul>
                {person.map( e => 
                    <Person 
                    key={e.name} 
                    id={e.id}
                    name={e.name} number={e.number}
                    />
                )} 
            </ul>
        </div>
    )
}

export default App
