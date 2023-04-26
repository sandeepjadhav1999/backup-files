import {useState} from 'react'
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({items}){

    const [expandedIndex, setExpandedIndex] = useState(-1)

    const handleChange = (nextIndex) =>{
        if( expandedIndex === nextIndex){
            setExpandedIndex(-1)
        }
        else{
            setExpandedIndex(nextIndex)
        }
    }

    const renderData = items.map((item, index)=>{

        const isExpanded = index === expandedIndex
        const icons = <span className='text-2xl'>
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>

        return (
            <div key={item.id}>
                <div className='flex justify-between p-3 font-bold bg-gray-50 items-center cursor-pointer' onClick={()=>{handleChange(index)}}>
                    {item.label}
                    {icons}
                </div>
                {/* in react or when ever you return a boolean or null or undefined it nver get printed out on the screen.*/}
                {/* js expession ====> if u use || than it will return the truty value oly but i us && is will the last truty valye fr examaple 100 && 200 it will return 200 */}
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        )
    })

    return (
        <div className='border-x border-t rounded'>{renderData}</div>
    )
}

export default Accordion