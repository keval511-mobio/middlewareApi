import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Middleware } from '../Redux/Action'
import Forms from './Forms'

export default function Home() {
    const details = useSelector((state)=>state. Reducer.details)
   
    
    const dispatch = useDispatch()
       const[data,setData]=useState([])
    
 const addingData=()=>{
    dispatch(Middleware())
    setData(details)
 }
  
 
  return (
     <>
    
    <div>
    <button  onClick={addingData}>click</button> 
    <br /><br />
    <center>
    <table>

<thead>
<tr>
    <th>userId</th>
    <th>id</th>
    <th>title</th>
    <th>body</th>
</tr>
</thead>

<tbody>
{
data.slice(0,50).map((value,index)=>{
        return(
            <tr key={index}>
                 
                <td>{value.userId}</td> 
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.body}</td>
         </tr>
             
        )
    })
  }
</tbody>
</table>
    </center>

    </div>
     <br /><br /><br />
<Forms/>
     </>
  )
}
