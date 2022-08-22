import React from 'react';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

function EditBook() {

        let upbookdata=localStorage.getItem("upbookdata")
        upbookdata=JSON.parse(upbookdata)
        console.log(upbookdata)
        let bookn=upbookdata.bookName;
        let isbn1=upbookdata.isbnNumber;
        let authorN=upbookdata.authorName;
        let noofcopies=upbookdata.added;
        let gn=upbookdata.genre;
          const [bookName,setBookName]=useState(bookn);
          const [authorName,setAuthorName]=useState(authorN);
          const [isbnNumber,setisbn]=useState(isbn1);
          const [added,setAdded]=useState(noofcopies);
          const [genre,setGenre]=useState(gn);
          const navigate=useNavigate();
          const handleSubmit=(event)=>{
              let bookdata={isbnNumber,bookName,authorName,added,genre}
              event.preventDefault();

              fetch("http://localhost:8080/update",{
              method:"PUT",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(bookdata),
            }).then(() => {
              console.log("added")
              localStorage.removeItem("upbookdata")
          })
          alert ('Updated successfully')
          navigate("/AdminProTable")
        }

  return (
    <div>
        <h1 style={{"textAlign":"center"}}>Edit books here📕</h1>
        <div style={{"textAlign":"center"}}>
        <label>ISBN Number</label>
        <br></br>
                <input type='text' name='isbn' 
                value={isbnNumber}
                onChange={(e)=>{setisbn(e.target.value)
                }}>
                    </input>
                    <br></br><br></br>
                <label>Book Name</label>
                <br></br>
                <input type='text' name='bookName' 
                value={bookName}
                onChange={(e)=>{setBookName(e.target.value)
                }}>
                    </input>
                    <br></br><br></br>
                <label>Author Name</label>
                <br></br>
                <input type='text' name='authorName' 
                value={authorName}
                onChange={(e)=>{setAuthorName(e.target.value)
                }}>
                    </input>
                    <br></br><br></br>
                <label>Number of copies added</label>
                <br></br>
                <input type='text' name='added' 
                value={added} 
                onChange={(e)=>{setAdded(e.target.value)
                }}>
                    </input>
                    <br></br><br></br>
                <label>Genre</label>
                <br></br>
                <input type='text' name='genre' 
                value={genre} 
                onChange={(e)=>{setGenre(e.target.value)
                }}>
                    </input>
                    <br></br><br></br>
                <input type='submit' onClick={handleSubmit} ></input>
                </div>
    </div>
  )
}

export default EditBook;




