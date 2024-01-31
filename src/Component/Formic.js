import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import { Avatar, Button, Checkbox, Grid, Paper, TextField, Typography  } from '@mui/material'
import React,{useState} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import '../Webpage/My_page.css'
// import { useNavigate } from 'react-router-dom';
import { Form, Formik,Field } from 'formik';




const Singupformik = () => {
  const [username,setUsername] = useState('');
    const [password , setPassword] = useState('');
    // const fun=useNavigate()
    const initialValues={
      name:"",
      phoneno:"",
      email:"",
      password:"",
      confoirmpassword:""
    }
    // const validalionschema=Yup.object().shape({
    //   name:Yup.string().required("Required")
    // })

    const handleUsernameChange =(event) => {
      setUsername(event.target.value)
  }
  const handlePasswordChange = (event) =>{
      setPassword(event.target.value)
  }
  const onsubmit=(values,props) =>{
    console.log(values);

  }

//   const home=()=>{
//     fun(`/Home/${username}`)
//   }
  return (
    <div className='signin' >
        <div className='in'>
      <Grid >
        <Paper
          elevation={24}
          style={{
            width: 400,
            padding: "30px 20px",
            //margin: "20px auto",
            backgroundColor: "violet",
          }}
        >
          <Grid align="center">
            <Paper style={{ height: "50", width: 50, backgroundColor: "red" }}>
              <Avatar style={{ backgroundColor: "#ff8a00" }}>
                <CardGiftcardRoundedIcon color="success" />
              </Avatar>
            </Paper>
            <h2>SIGN UP</h2>
            <Typography variant="caption" style={{ fontFamily: "cursive" }} gutterBottom>
              Plese fill this form to create an account !
            </Typography>
          </Grid>
          <Formik initialValues={initialValues} onSubmit={onsubmit}>
            {(props) => (
              <Form>
                {console.log(props)}
              <TextField
                label="name"
                name='name'
                variant="outlined"
                style={{ margin: "20px", width: 300 }}
                value={username}
                 onChange={handleUsernameChange}
                autoFocus
                required
                {...props.getFieldProps('name')}
              />
              <TextField
                label="phone no"
                name='phoneno'
                variant="outlined"
                style={{ margin: "10px", width: 300 }}
                required
                {...props.getFieldProps('phoneno')}
              />
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
              <Field as={TextField}      
                label="email"
                name='email'
                type='Email'
                variant="outlined"
                style={{ margin: "10px", width: 300 }}
                required
              />
              < Field as={TextField} 
                label="password"
                name='password'
                variant="outlined"
                type="password"
                value={password}
                 onChange={handlePasswordChange}
                style={{ margin: "10px", width: 300 }}
                required
                
              />
              <Field  as={TextField}
                label="confoirm password"
                name='confoirm password'
                variant="outlined"
                type="password"
                style={{ margin: "10px", width: 300 }}
                required
                
              />
              
              <FormControlLabel
                control={<Checkbox name="checkeaA" />}
                label="I accsept the terms & conditions."
                required
              />
              <Button type="submit" variant="contained" color="success"  fullWidth>
                Sign In
              </Button>
            </Form>

  )}
          
          </Formik>
        </Paper>
      </Grid>
      </div>
    </div>
  );
}

export default Singupformik