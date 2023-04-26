import './carList.css'
import CarShow from './carsShow'

function CarList({image}){
    const renderImages = image.map((image)=>{
        return <CarShow key={image.id} image={image}/>
    })
    return (
        <div className='carshow'>
            {renderImages}
        </div>
       
    )
}

export default CarList