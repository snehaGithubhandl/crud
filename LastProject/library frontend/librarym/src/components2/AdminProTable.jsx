import React, { useState , useEffect} from "react";
import './AdminProTable.css';
import AdminBookRaw from "./AdminBookRaw";
import AddBook from "./AddBook";
import ReactPaginate from "react-paginate";
import './Paginate.css'

function AdminProTable(props){


    const[data,getData]=new useState([])
    const [Book ,getBook]=useState([]);



    const [state,setState] =useState(false) // default is false.



    const [pageNumber, setPageNumber] = useState(0);
const usersPerPage = 10;
const pagesVisited = pageNumber * usersPerPage;






    const fetchData=()=>{
      fetch("http://localhost:8080/find").then(response=> response.json())
          .then((data)=>{
              // let bookd=data.results
            //   setBook(data.map((data)=> {return <AdminBookRaw data={data} />}))
            //   console.log("haiiiiii")
            //   console.log(data)
            getBook(data)
          })
      }

      const list=Book.slice(pagesVisited,pagesVisited+usersPerPage).map((data)=><AdminBookRaw data= {data} fetchData={fetchData} />
        )
        const pageCount = Math.ceil(Book.length / usersPerPage);
        const changePage = ({ selected }) => {
          setPageNumber(selected);
        };



      useEffect(()=>{
          fetchData();
      },[])
    return(
        <div className="div1">
            <div>
                <button onClick={()=>setState(!state)}>Add book</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <i><font size="1">*Click the button to add books.</font></i>
                { state && <AddBook/> } {/* execute this statement if both are true otherwise it is false */}
            </div>
            <h1 id="heading">Library</h1>
            <table className="table">
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
                        Genere
                    </th>
                    <th>
                        Edit
                        
                    </th>
                    <th>
                        Delete
                        
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
export default AdminProTable;
