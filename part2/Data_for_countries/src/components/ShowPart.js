import React from 'react'
import CountryInfo from './CountryInfo'


const ShowPart = ({ countries, handle}) => {

  if (countries.length > 1 && countries.length <= 10) {
    return (
      <div>
        {countries.map(country => <div key={country.name} >{country.name} <button onClick={() => { handle([country]) }}>show</button></div>)}
      </div>
    )
  } else if (countries.length > 10) {
    return (
      <div>
        Too many matches,specity another filter
      </div>
    )
  } else if (countries.length === 1) {
    return (
      <CountryInfo countryInfo={countries[0]}></CountryInfo>
    )
  }
  return (<div></div>)

}
export default ShowPart