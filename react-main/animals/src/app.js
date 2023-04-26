import './app.css'
import {useState} from 'react'
import AnimalShow from './animalShow'

function getRandomAnimal(){
    const animals = ['bird','cow','dog','cat','gator', 'horse']
    return animals[(Math.floor(Math.random()*animals.length))]
}


function App(){
    const [animal, setAnimals] = useState([])
    
    const handleClick = ()=>{
        //we can use animal.push also but the reason y v r nt using is that animals.push directly modifies the variable
        setAnimals([...animal, getRandomAnimal()])     
    }

    const renederAnimal = animal.map((animal, index)=>{
        return (
            <AnimalShow type={animal} key={index}/>
        )
    })

    return (
        <div className='app'>
            <button onClick={handleClick}>Add Animal</button>
            <div className='animal-list'>{renederAnimal}</div>
        </div>
    )
}

export default App