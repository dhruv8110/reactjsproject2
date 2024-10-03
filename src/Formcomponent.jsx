import React, { useState } from 'react'

const Formcomponent =()=> {
    const [name,setName] = useState("");
    const [data,setData] = useState([]);
    const [id,setId] = useState([])
    const saveData = (e) =>{
        e.preventDefault()
        if (id!='') {
            //update
            let res = data.map((i,index)=>{
                if(index == id)
                {
                    i = name
                }
                return i 
            })
            setData(res)
        } else {
            // insert
            setData([
                ...data,
                name
            ])
            
        }
        setName('')
        setName('')
        
    }
    const delData = (id) =>{
        let res = data.filter((i,index)=>{
            return index != id 
        })
        setData(res)
    }
    const editData = (id) =>{
        let res = data.find((i,index)=>{
            return index == id 
        })
        setName(res)
        setId(id)
    }
  return (
    <div>
    <h1>vite project</h1>
    <br />
    <form action='#' method="post" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name" class="name"value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="submit" value={id!='' ? "update" : "insert"} class="submit"/>
    </form>
    <br /> <br />
    <table border={'2'} class="table" cellSpacing={'4'}>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>action</th>
        </tr>
        {
        data.map((i,index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{i}</td>
                    <td><button onClick={()=>editData(index)}>edit</button></td>
                    <td><button onClick={()=>delData(index)}>delete</button></td>
                </tr>
            )
        })
    }
    </table>
    
    </div>
  )
}

export default Formcomponent