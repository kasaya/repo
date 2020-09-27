import React from 'react'


const Filter = ({selecter, handle})=>{

 return (
    <div>
     filter shown with<input value = {selecter} onChange={(event)=>handle(event.target.value)}/>   
   </div>
 )
}
export default Filter