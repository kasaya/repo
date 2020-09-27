import React ,{useEffect} from 'react'
import axios from 'axios'

const CountryInfo = ({ countryInfo }) => {
  
  const api_key = process.env.REACT_APP_API_KEY
  console.log('show:',api_key)
  useEffect(()=>{
    axios.get(`https://api.weatherstack.com/current`,{
      params:{
        access_key:api_key,
        query:countryInfo.name
      }
    }).then(response=>{
      console.log(response.data)
    })
  },[api_key,countryInfo])

  return (
    <div>
      <h2>{countryInfo.name}</h2>
      <div>capital {countryInfo.capital}</div>
      <div>population {countryInfo.population}</div>
      <div>
        <h3>languages</h3>
         {countryInfo.languages.map(language=> <li  key={language.name} >{language.name}</li>)}
      </div>
       <div>
         <img width="10%" src={countryInfo.flag} alt={countryInfo.name}></img>
       </div>
       
    </div>
    )
  
}
export default CountryInfo