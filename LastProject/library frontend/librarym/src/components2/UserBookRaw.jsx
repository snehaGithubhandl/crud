import React from 'react'
import { useState } from 'react'

function UserBookRaw(props) {
    let p=props.data

    let userInfo=localStorage.getItem("UserInfo");
userInfo=JSON.parse(userInfo);
// console.log(props.data.isbnNumber)

    const [isbnNumber,setIsbnNumber]=useState(props.data.isbnNumber);
    const [bookName,setBookName]=useState(props.data.bookName);
    const [authorName,setAuthorName]=useState(props.data.authorName);
    const [added,setAdded]=useState(props.data.added);
    const [available,setAvailable]=useState(props.data.available)
    const [genre,setGenre]=useState(props.data.genre)
    const buy= event=>
  {
    
    
    let m=available
    event.currentTarget.disabled=true;
   let settle={isbnNumber,bookName,authorName,added,available,genre}
if(available!=="0")
{
    let isbn=isbnNumber;
    fetch(`http://localhost:8080/bookbuyupdate/${isbnNumber}`,{
      method:"PUT",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(settle)
    })
    .then((res) =>
            res.text())
        .then((response) => {
          alert('Book purchased')
          props.fetchData()
        })



const dateOfPrchase=new Date(Date.now()).toISOString().substring(0,10);//now date
const nextdate=new Date(Date.now()+12096e5);
console.log(dateOfPrchase)
const dateOfReturn=nextdate.toISOString().substring(0,10)
console.log(dateOfReturn)

let uid=userInfo.uid;
const user={uid,isbnNumber,bookName,authorName,dateOfPrchase,dateOfReturn}
fetch("http://localhost:8080/buybookinsert",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
      }).then(() => {
      })
}
if(available==="0")
{
  alert("No Books are Avilable")
}
  }
    let d
  function update(book)
  {
    d=book.isbnNumber
    console.log("Haiiii")
    console.log(d)
    setBookName(book.bookName)
    setAuthorName(book.authorName)
    setAdded(book.added)
    setAvailable(book.available)
     setAvailable(available-1)
  }

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
        {props.data.added}
    </td>
    <td>
        {props.data.available}
    </td>
    <td>
        {props.data.genre}
    </td>
    <td>
        {
            <button onClick={buy}>BUY</button>
        }
    </td> 
    
    </tr>

  )
}
export default UserBookRaw









