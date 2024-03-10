import { useState } from "react"
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { database } from "../firebaseConfig";
import Footer from '../component/Footer'
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

function Addblog() {
  const [createdby,setCreatedby]=useState("");
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [imgurl,setImgurl]=useState("");
  const [createdat,setCreatedat]=useState(Timestamp.now().toDate().toString());
 const  handleSubmit =async (e)=>{
  e.preventDefault();
  await addDoc(collection(database,"News"),{
    title,createdat,createdby,description,imgurl

  }
  ).then(()=>{alert("Success!!!")})
  .catch(err=>{alert(err.message)})
  setTitle("")
  setCreatedat("")
  setCreatedby("")
  setTitle("")
  setImgurl("")

 }
  return (

    <div>
      <Navbar></Navbar>
      
    <div className='addblog-form'>
        <p>Add  News</p>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input name="username" placeholder="enter your name" type='text'onChange={(e)=>
              {setCreatedby(e.target.value)}}></input>
            <br/>
            <label>News Title</label>
            <input name="title" placeholder="Your Title" type='text'
            onChange={(e)=>{setTitle(e.target.value)}}></input>
            <br></br>
            <label>Description</label>
         <textarea onChange={(e)=>{setDescription(e.target.value)}}
         type="text" placeholder="Write your News Article"
         ></textarea>
         <br></br>
         <label>Image</label>
            <input name="image" placeholder="Paste Image Url" type='text'onChange={(e)=>
              {setImgurl(e.target.value)}}></input>
            <div className="btn-container">
                <button>Submit</button>
            </div>
             </form>
      
    </div>
    <Footer/>
    </div>
  )
}

export default Addblog
