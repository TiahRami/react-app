import { useState } from "react";
import PersonForm from "./component/PersonForm";
import Person from "./component/Person";
import Filter from "./component/Filter";


const App = () => {
    const [person, setPerson] = useState([
        {name: "Arto Hellas", number: "040-123456", id: 1},
        {name: "Ada Lovelace", number: "39-44-532657", id: 1},
        {name: "Dan Abramov", number: "12-123-860497", id: 1},
        {name: "Mary Poppendieck", number: "79-46-709039", id: 1},
        
    ])
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [search, setSearch] = useState("")

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
        setPerson (person.concat(newNameObject))
        setNewName("")
        setNewNumber("")
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
                    // <li key={e.name}> {e.name} {e.number} </li>
                    <Person 
                    key={e.name} 
                    name={e.name} number={e.number}/>
                )} 
            </ul>
        </div>
    )
}

export default App