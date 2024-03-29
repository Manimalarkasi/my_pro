import React, { useState } from 'react';
import './My_page.css';
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import CastleTwoToneIcon from '@mui/icons-material/CastleTwoTone';
import { green, red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';



export const Login =()=>{
    
    const [username,setUsername] = useState('');
    const [password , setPassword] = useState('');
    
    const fun=useNavigate()
    const up=useNavigate()
    
    const handleUsernameChange =(event) => {
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value)
    }
    
    
        const home= ()=>{

            // alert("welcome" + " " + username) 
            fun(`/Home/${username}`)
         }
         const go=()=>{
            up("./Singup")
         }
        return(
            <div className='log-ful' style={{color:'blue'}}>
                <h1 style={{color:"brown"}}>welcome to my page</h1>
                <div className='log'>
                    <Grid>
                    <Paper elevation={24} className='login-paper'>
                        <Grid align="center">
                            <Paper elevation={24} style={{width:60,alignContent:'center'}}>
                            <Avatar style={{backgroundColor:"#ff8a00"}} id='Avatar'><CastleTwoToneIcon color="success" /></Avatar>
                            </Paper>
                        
                        <h2 style={{color:'red'}}>SIGN IN</h2>
                        </Grid>     
                        Employee ID:<TextField label="emp id" variant="outlined" style={{margin:12,padding:10}}name='emp id'  autoFocus required/><br />
                        UserName:<TextField label="UserName" variant="outlined" style={{margin:12,padding:10}} value={username} name='name' onChange={handleUsernameChange} required/><br />
                        Password:<TextField label="password" type='password' variant="outlined" style={{margin:12,padding:10}} name='password' value={password} onChange={handlePasswordChange} required/> <br />
                        <FormControlLabel
                        control={
                            <Checkbox
                            name="checkedB"
                            color='primary' 
                            required
                            />
                        }
                        label = "Remember Me"
                        defaultChecked
  sx={{
    color: red,
    '&.Mui-checked': {
      color:green,
    },
  }}
                       />
                        <Button type='submit' color='primary' variant="contained"  onClick={home} fullWidth>Sign In</Button>
                        <Typography style={{margin:10}}>
                            <Link href='./#'>Forgot password?</Link>
                        </Typography >
                        <Typography> Do you have an any account <br />
                           <Button type='submit' color='success' variant='contained' onClick={go}>SIGN UP</Button>
                        </Typography>
                    </Paper>
                    </Grid>
                </div>
            </div>
        )
}
