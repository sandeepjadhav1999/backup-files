import Accordion from "../component/Accordion";

function AccordionPage() {

  const items =[
    {
      id:'1',
      label:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem.'
    },{
      id:'2',
      label:'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      content:'Tempor orci dapibus ultrices in iaculis nunc sed augue. Quis auctor elit sed vulputate mi sit amet. Arcu non odio euismod lacinia. Facilisi cras fermentum odio eu feugiat pretium. At erat pellentesque adipiscing commodo.'
    },{
      id:'3',
      label:'consectetur adipiscing elit, sed ut labore et dolore magna aliqua.',
      content:'Enim lobortis scelerisque fermentum dui. Neque gravida in fermentum et sollicitudin ac orci. Felis imperdiet proin fermentum leo vel orci. Eros in cursus turpis massa tincidunt dui ut.'
    }
  ]

  return(
  <Accordion items={items}/>
  )
}

export default AccordionPage;
