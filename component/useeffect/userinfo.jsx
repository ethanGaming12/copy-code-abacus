import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios';
function userinfo() {

    let [user , setUser] = useState([]);

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=20").then((res) => {
            console.log(res.data.results);
            setUser(res.data.results);
        }).catch((error) => {
            console.log(error);
            alert("Something Went Wrong!!!");
        })
    },[]);

  return (
    <div>
      <h2>User Information</h2>
      <p>There is list of Information</p>

      {
        user.length > 0 ? <div>
            <table cellPadding={10} border={1} style={{margin: "10px auto"}}>
                <thead style={{backgroundColor : "black" , color: "white"}}>
                    <tr>
                        <th>ID</th>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>GENDER</th>
                        <th>EMAIL</th>
                        <th>CITY</th>
                        <th>AGE</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((element , index) => {
                            return (
                                <tr>
                                    <td>{index+1}</td>
                                    <td><img src={element.picture.medium} height={80} /></td>
                                    <td>{element.name.first}</td>
                                    <td>{element.gender}</td>
                                    <td>{element.email}</td>
                                    <td>{element.location.city}</td>
                                    <td>{element.dob.age}</td>
                                    
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div> : <h2 style={{color: "red"}}>NO USER INFORMATION</h2>
      }
    </div>
  )
}

export default userinfo
