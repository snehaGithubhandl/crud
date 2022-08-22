import React from 'react'
import { useState, useEffect } from 'react';
import UserBookRaw from './UserBookRaw';
import {useNavigate} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './Paginate.css'

function UserProTable() {
    
    const[data,getData]=new useState([])
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;


  const navigate=useNavigate();
  const profile=(event)=>{
    event.preventDefault();
    navigate('/MyProfile')  }


    let userInfo=localStorage.getItem("userInfo");
userInfo=JSON.parse(userInfo);




  const [Book ,getBook]=useState([]);
  const fetchData=()=>{
      fetch("http://localhost:8080/find") .then(response=> response.json())
          .then((data)=>{
            //   let bookd=data.results
            //   setBook(data.map((data)=> {return <UserBookRaw data={data} fetchData={fetchData}/>}))
            //   console.log(data.id)
            //   console.log(data.id)
            getBook(data)
          })
      }
      const list=Book.slice(pagesVisited,pagesVisited+usersPerPage).map((data)=><UserBookRaw data= {data} fetchData={fetchData} />
      )
    


      useEffect(()=>{
          fetchData();
      },[])

      const pageCount = Math.ceil(Book.length / usersPerPage);
      const changePage = ({ selected }) => {
        setPageNumber(selected);
      };


  return (
    <div>
        <h1>Book Details</h1><br></br>
        <button onClick={profile} >My Profile</button><br></br><br></br>
        <table>
        <tr>
                    <th>
                        ISBN no
                    </th>
                    <th>
                        Book Name
                    </th>
                    <th>
                        Author
                    </th>
                    <th>
                        Total no.of copies
                    </th>
                    <th>
                        Available copies
                    </th>
                    <th>
                        Genre
                    </th>
                    <th>
                      Buy Book📕
                    </th>
                    
                    </tr>
                    {list}
        </table>


        <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />



    </div>
  )
}
export default UserProTable