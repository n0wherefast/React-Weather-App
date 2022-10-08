import icon from "../img/116.png"
import React,{useState,useEffect} from "react"
import { API_URL,geoOptions } from "./Getdata";

export const Search = () =>{
    const [search, setSearch] = useState('');
    const[city,setCity] = useState('')
    
    const onChange = (e) =>{
        setSearch(e.target.value) 
       
    }
    const handleSubmit = (e) =>{
        e.preventDefault() 
        loadApi(city)
        
    }
     useEffect(()=>{
      setCity(search)
    },[handleSubmit])

    const loadApi =(inputValue)=>{
       return fetch(`${API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoOptions)
       .then(response => response.json())
       .then(response => console.log(response))
       .catch(err => console.error(err));
       
   
    }
    
    return(
<nav className="navbar bg-light">
  <div className="container-fluid">
    <div className="navbar-brand"><h1><img src= {icon} alt='' />Weather App</h1></div>
    <form className="input-group" role="search">   
      <input className="form-control  me-2" value={search} onChange={onChange} type="search" placeholder="Search Cities.." aria-label="Search"/>
      <button className="btn btn-outline-success" onClick={handleSubmit} type="submit">Search</button>
      <h3>{city}</h3>
    </form>
  </div>
</nav>
    )
}