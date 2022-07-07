import persons from "../services/persons"


const Person = ({ name, number, id }) => {
return (
    <li > {name} {number} <button onClick={() => {
      if(window.confirm(`Delete ${name} ?`)){
        return persons.suppr(id)
      }
    }}> Delete</button> </li>
  )
}

export default Person
