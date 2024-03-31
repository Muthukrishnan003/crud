import React, { useEffect, useState } from 'react';
import design from '../style.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {

    let[data,setData]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/student")
        .then((res)=>{setData(res.data)})
        .catch(()=>{console.log("Not Valid url ")})
    },[])
    return (
        <div>
            <h1>CRUD Operation using Axios, Json-server, React-router-dom</h1><br />
            <p>Click here to add new record <Link to='/Create'>Add</Link></p>
            <br />
            <table id={design.table}>
                <thead>
                    <tr><th>Si.No</th><th>Name</th><th>Phone No.</th><th>Mail</th><th>Action</th></tr>
                </thead>
                <tbody>
                    {
                      data.map((rec)=>{
                        return(
                            <tr key={rec.id }><td>{rec.id}</td><td>{rec.name}</td><td>{rec.phone}</td><td>{rec.email}</td><td><button >Edit</button><button>Delete</button></td></tr>
                        )
                           
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Home;
