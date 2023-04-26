import './searchBar.css'
import { useState } from "react"

function SearchBar({search}){

    const [term, setTerm] = useState('')

    const handleSubmit =(event)=>{
        event.preventDefault()
        search(term)
        
    }

    const handleChange = (event) =>{
        setTerm(event.target.value)
    }

    return (
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <label>Enter the Search</label>
                <input onChange={handleChange}/>
            </form>
        </div>
    )
}

export default SearchBar