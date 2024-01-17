import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Home = (props) => {
    const [user,setUser]=useState()

    const data=useParams()
    console.log(data);
    console.log(user);
    useEffect(()=>{
        setUser(data.userName)
    },[])
  return (
    <div>
        <h1>welcome {user}</h1>
      <h2>kiiiiii</h2>
    </div>
  )
}

export default Home