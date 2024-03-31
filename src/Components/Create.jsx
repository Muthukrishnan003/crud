import React, { useState } from 'react';
import design from '../style.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Create = () => {
    let nav = useNavigate()

    let [nam,setNam]=useState("")
    let [phn,setPhn]=useState("")
    let [mai,setMai]=useState("")

    let formhandle = (e)=>{
        e.preventDefault()
        let obj = {
            "name":nam,
            "phone":phn,
            "email":mai
        }
        axios.post("http://localhost:5000/student",obj)
        .then(()=>{})
        .catch(()=>{})
        nav('/')
    }

    return (
        <div id={design.create}>
            <form action="">
                Name: <input type="text" value={nam} onChange={(e)=>{setNam(e.target.value)}} /> <br />
                Phone No.: <input type="text" value={phn} onChange={(e)=>{setPhn(e.target.value)}}/><br />
                Email: <input type="text" value={mai} onChange={(e)=>{setMai(e.target.value)}} /><br />
                <button onClick={formhandle}>Create</button>
            </form>
        </div>
    );
}

export default Create;
