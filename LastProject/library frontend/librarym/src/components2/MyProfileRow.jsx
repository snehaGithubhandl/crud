import React from 'react'
import { useEffect,useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import MyProfile from './MyProfile';
function MyProfileRow(props) {
    const navigate=useNavigate();
    const returnbook=(event)=>
    {
        let isbnNumber=props.data.isbnNumber;
        fetch(`http://localhost:8080/deletebuybook/${isbnNumber}`,{
            method:"DELETE",
      headers:{
        'Content-type':'application/json'
        },
    })
    .then(res=>res.text())
    .then((result)=>{
        console.log(result)
        alert(result)
        props.refresh()
    })
    }
    useEffect(()=>{
        const date=new Date(Date.now()).toISOString().substring(0,10);
        console.log(date)
        const dateOfReturn=`${props.data.dateOfReturn}`
        console.log(dateOfReturn)
        if(date===dateOfReturn)
        {
            alert('Return the book')
        }
        console.log(alert)
    },[])
  return (
    <tr>
     <td>
        {props.data.isbnNumber}
    </td>
    <td>
         {props.data.bookName}
     </td>
    <td>
        {props.data.authorName}
    </td>
    <td>
        {props.data.dateOfPrchase}
    </td>
    <td>
       {props.data.dateOfReturn}
    </td>
    <td>
        <button onClick={returnbook}>Return </button>
    </td>
</tr>
  )
}
export default MyProfileRow


