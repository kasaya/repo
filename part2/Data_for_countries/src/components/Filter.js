import React from 'react'


const Filter = ({selecter, handle})=>{

 return (
    <div>
     find countries<input value = {selecter} onChange={(event)=>handle(event.target.value)}/>   
   </div>
 )
}
export default Filter