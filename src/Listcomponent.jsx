import React from 'react'

function Listcomponent() {
    let arr =[
        "use array.map",
        "not a for loop",
        "give each items",
        "avoid using array index"
    ]
  return (
    <>
    
    <h1 class="h1">List component project</h1>
    <ul>
        {
            arr.map((i)=>{
                return <li className='li'>{i}</li>
            })
        }
    </ul>
    </>
  )
}

export default Listcomponent