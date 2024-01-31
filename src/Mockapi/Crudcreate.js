
import { Label } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Form } from 'react-router-dom'

function Crudcreate() {
    const [name,setName] = useState('');
    const [empid,setEmpid] = useState('');
    const [mail,SetMail] = useState('');
    const [password,setPassword] = useState('');
    const API_URL='https://6593d64d1493b01160693df3.mockapi.io/employee'
    const postdata = async() =>{
        console.log(name, empid, mail,password);
       await axios.post(API_URL,{
        name,
        empid,
        mail,
        password
       })
    }
  return (
    <div className='createapi'>
     <h2>crud  create operations</h2> 
     <label>name</label>
   <TextField type='text' variant='outlined' label='name' onChange={(e)=>setName(e.target.value)} autoFocus required style={{padding:"5px"}}/><br />
   <label>employee ID:</label>
    <TextField type='text' variant='outlined' label='empid' onChange={(e)=>setEmpid(e.target.value)} required style={{padding:"5px"}}/><br />
   <label>mail Id :</label>
    <TextField type='email'  variant='outlined' label='mailid' onChange={(e)=>SetMail(e.target.value)} required style={{padding:"5px"}}/><br />
   <label>password :</label>
    <TextField type='password' variant='outlined' label='password' onChange={(e)=>setPassword(e.target.value)} required style={{padding:"5px"}} /><br />
    <Button variant='contained' type='submit' onClick={postdata}>submit</Button>
    </div>
  )
}

export default Crudcreate
