import DropDown from "../component/dropDown";
import { useState } from "react";

function DropDownPage() {

  const [selection, setSelection] = useState(null)


  const handleClick = (option)=>{
    setSelection(option)
  }

  const options =[
    {label: 'Red', value:'red'},
    {label: 'Green', value:'green'},
    {label: 'Blue', value:'blue'}
  ]

  return (
    <DropDown options={options} value={selection} onChange={handleClick}/>
  )
}

export default DropDownPage;
