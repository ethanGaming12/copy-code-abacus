import React, { useState } from 'react'
import "../profile/profile.css"

function profile() {
    let [image , setImage] = useState("");
    // let [data , setData] = useState

    const changeToRajat =() => {
      name : "Rajat";
      gender : "male";
      email: "rajat@mail.com";
      description : "";
    };

    const changeToRiya =() => {
      
      name : "Riya";
      gender : "female";
      email: "riya@mail.com";
      description : "";
    };
  return (
    <div className='mainContainer'>

        <div className="leftContainer">
            <img src='' height="200px" width="200px" alt='NO IMAGE'/>
        </div>
        <div className="rightContainer">
            <h2>NAME</h2>
            <h2>GENDER</h2>
            <h2>EMAIL</h2>
            <h2>DESCRIPTION</h2>
            <button>CHANGETORAJAT</button>&nbsp;&nbsp;
            <button>CHANGETORIYA</button>
            <input type='checkbox'></input>
        </div>
      
    </div>
  )
}

export default profile
