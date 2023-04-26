import { useEffect, useState ,useRef } from 'react'
import { GoChevronDown} from "react-icons/go";
import Panel from './panel';

function DropDown({ options, value, onChange }) {

    const [isOpen, setIsOpen] = useState(false)
    const divEl = useRef()

    useEffect(()=>{
        const handle = (event)=>{
            if(!divEl.current.contains(event.target)){
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handle,true)

        return ()=>{
            document.removeEventListener('click',handle)
        }
    },[])

    const handlClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setIsOpen(false)
        onChange(option)
    }

    const renderOptions = options.map((option) => {
        return <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => { handleOptionClick(option) }} key={option.value}>{option.label}</div>
    })


    return (
        <div ref={divEl} className='w-48 relative'>
            <Panel className='flex justify-between item-center cursor-pointer' onClick={handlClick}>
                {value?.label || 'Select...'}
                <GoChevronDown/>
            </Panel>
            {isOpen && <Panel className='absolute top-full'>{renderOptions}</Panel>}
        </div>
    )
}
export default DropDown