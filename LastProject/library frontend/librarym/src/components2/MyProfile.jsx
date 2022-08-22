import React from 'react';
import MyProfileRow from './MyProfileRow';
import {useState, useEffect} from 'react';
import UserBookRaw from './UserBookRaw';
import { useNavigate } from 'react-router-dom';
import { setDefaultLocale } from 'react-datepicker';

function MyProfile() {
    const navigate=useNavigate();
    const [Book ,setBook]=useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;
    let userInfo=localStorage.getItem("UserInfo");
    userInfo=JSON.parse(userInfo);
    console.log(userInfo.uid)
    let uid=userInfo.uid
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=()=>{
        let Uid=uid;
        fetch(`http://localhost:8080/getuserbook/${Uid}`)
        .then((res)=>
        res.json())
        .then((result)=>{
            console.log(result);
            //getData(response);
            setBook(()=>result.map((data,index)=>{
                console.log(data)
                return <MyProfileRow data={data} key={index} refresh={refresh}/>
           }))
        }
        )
    }
    function refresh()
    {
        let Uid=uid;
      fetch(`http://localhost:8080/getuserbook/${Uid}`)
      .then((res) =>
          res.json())
      .then((result) => {
          console.log(result);
           setBook(()=> result.map((data,index) => {
            console.log(data)
            return <MyProfileRow data={data} key={index} refresh={refresh} />
          }))
      })
    }
    const back=(event)=>{
        event.preventDefault();
        navigate('/UserProTable')
    }
  return (
    <div className='div1'>
        <h1 id='heading'>My Books</h1>
        <button className='button' onClick={back}>Back</button>
        <table className='table'>
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
                        Date of Purchase
                    </th>
                    <th>
                        Date of return
                    </th>
                    <th>
                        Return
                    </th>
            </tr>
            {Book}
        </table>
    </div>
  )
}
export default MyProfile;









