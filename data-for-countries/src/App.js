import {useState, useEffect} from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then(response => {
          setAllCountries(response.data);
        });
  }, [])

  const handleFilterChange = event => {
    const searchWord = event.target.value;
    const newFilter = allCountries.filter(country => {
      return country.name.common.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setCountries([])
    } else {
      setCountries(newFilter);
    }
    // if(newFilter > 10) {
    //   set
    // }
  };

  return(
    <div>
      <label htmlFor="textInput">find countries</label>
      <input 
        id="textInput"
        type="text"
        onChange={handleFilterChange}
      />
      {countries.length < 10 && countries.length > 1 && (<ul>
         {countries.map(e => 
            <li key={e.flag} > {e.name.common} {e.flag}</li>
          )}
       </ul>)}
      {countries.length > 10 && (<p>Too many matches, specify another filter</p>)}
      {countries.length === 1 && (<div>
        <h1> {(countries[0].name.common)}</h1>
        <p>Capital: {countries[0].capital[0]} </p>
        <p>Area: {countries[0].area} </p>
        <h2>Languages:</h2>
        <ul>
          { Object.entries(countries[0].languages).map(e => <li key={e[0]}> {e[1]} </li> ) }
        </ul>
        <img src={countries[0].flags.png} alt={(countries[0].name.common)} />
      </div>)}
    </div>
  )
}

export default App;