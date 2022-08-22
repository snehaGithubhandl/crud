import React from 'react'
import {useNavigate} from 'react-router-dom'

function BookRow(props) {
     const navigate=useNavigate();
     let d=props.data
     console.log(d)
    const update=(event)=>{
        event.preventDefault();
        localStorage.setItem("upbookdata",JSON.stringify(d))
        navigate("/EditBook")
   }
   const dele=(event)=>{
    event.preventDefault();
    fetch(`http://localhost:8080/deleting/${props.data.id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"},
      })
      .then( ()=>{alert("Deleted");
      props.fetchData();
    })
    }
  return (
        <tr>
                    <td>{props.data.isbnNumber}</td>
                    <td>{props.data.bookName}</td>
                    <td>{props.data.authorName}</td>
                    <td>{props.data.added}</td>
                    <td>{props.data.available}</td>
                    <td>{props.data.genre}</td> 
                    <td>{<button onClick={update}>Edit</button>}
                    </td> 
                    <td>{<button onClick={dele}>Delete</button>}
                    </td> 
                    </tr>
  )
}
export default BookRow
