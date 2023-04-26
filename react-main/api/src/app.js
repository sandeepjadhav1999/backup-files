import { useState } from 'react'
import SearchBar from './components/searchBar'
import searchImage from './api'
import CarList from './components/carList'


function App(){

    const [image, setImage] = useState([])

    const handleCLick =async(term)=>{
        const result = await searchImage(term)
        setImage(result)
    }

    return (
        <div>
            <SearchBar search={handleCLick}/>
            <CarList image={image}/>
        </div>
    )
}

export default App