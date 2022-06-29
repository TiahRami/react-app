import { useEffect, useState } from "react"
import axios from "axios"

const App = () => {
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setAllCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    if (newFilter) {
      const regex = new RegExp( newFilter, 'i' );
      const filteredCountries = () => allCountries.filter(country => country.name.match(regex))
      setCountries(filteredCountries)
    }
  }

  return(
    <div>
        <label htmlFor="htmlinput">find countries</label>
        <input 
          type="text"
          value={newFilter}
          onChange={handleFilterChange}
         />
    </div>
  )
}

export default App;