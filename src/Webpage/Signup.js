import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import { Avatar, Button, Checkbox, Grid, Paper, TextField, Typography  } from '@mui/material'
import React,{useState} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './My_page.css'
import { useNavigate } from 'react-router-dom';
import { Form, Formik,Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
// import Home from './Home';


const initialValues={
  name:"",
  phoneno:"",
  email:"",
  password:"",
  confirmpassword:""
}
const onSubmit=(values,e) =>{
  e.preventDefault();
  console.log(values);

}
const validationSchema= Yup.object({
  name:Yup.string().required('Requied'),
  phoneno:Yup.number().lessThan(9999999999,'must be 10 digit').required('Requiede'),
  email:Yup.string().email('invalid email format').required('Requiede'),
  password:Yup.mixed().required('Requiede'),
  confirmpassword:Yup.mixed().oneOf([Yup.ref("password")],'this password is not match').required('Required!'),
})
const Singup = () => {
  const [username,setUsername] = useState('');
    const [password , setPassword] = useState('');
    const fun=useNavigate();
    
    // const validalionschema=Yup.object().shape({
    //   name:Yup.string().required("Required")
    // })

    const handleUsernameChange =(event) => {
      setUsername(event.target.value)
  }
  const handlePasswordChange = (event) =>{
      setPassword(event.target.value)
  }
  

  const home=()=>{
    fun(`/nanbar`)
    // tonavigate(<Home />)
  }

  return (
    <div className='signin-full' >
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
            <Paper style={{ height: "50", width: 70, backgroundColor: "red" }} className='sign-paper'>
              <Avatar style={{ backgroundColor: "#ff8a00" }}>
                <CardGiftcardRoundedIcon color="success" />
              </Avatar>
            </Paper>
            <h2>SIGN UP</h2>
            <Typography variant="caption" style={{ fontFamily: "cursive" }} gutterBottom>
              Plese fill this form to create an account !
            </Typography>
          </Grid>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} validateOnMount>
            {(props) => (
              <Form>
                {console.log(props)}
              <Field as={TextField}
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
              <ErrorMessage name='name'>
                {
                  error=><div className='error'>{error}</div>
                }
              </ErrorMessage>
              <Field as={TextField}
                label="phone no"
                name='phoneno'
                variant="outlined"
                style={{ margin: "10px", width: 300 }}
                required
                {...props.getFieldProps('phoneno')}
              />
              <ErrorMessage name='phoneno'>
                {
                  error=><div className='error'>{error}</div>
                }
              </ErrorMessage>
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
              <ErrorMessage name='email'>
                {
                  error=><div className='error'>{error}</div>
                }
              </ErrorMessage>
              <TextField
                label="password"
                name='password'
                variant="outlined"
                type="password"
                value={password}
                 onChange={handlePasswordChange}
                style={{ margin: "10px", width: 300 }}
                required
                helperText='do not share yr password'
                {...props.getFieldProps('password')}
              />
              <ErrorMessage name='password'>
                {
                  error=><div className='error'>{error}</div>
                }
              </ErrorMessage>
              <TextField
                label="confirm password"
                name='confirmpassword'
                variant="outlined"
                type="password"
                style={{ margin: "10px", width: 300 }}
                required
                {...props.getFieldProps('confirmpassword')}
              />
              <ErrorMessage name='confirmpassword'>
                {
                  error=><div className='error'>{error}</div>
                }
              </ErrorMessage>
              
              <FormControlLabel
                control={<Checkbox name="checkeaA" />}
                label="I accsept the terms & conditions."
                required
              />
                {/* <Button variant='contained' color='success' type='submit' disabled={!props.isValid} onClick={home}>submit</Button> */}
              <Button type="submit" variant="contained" color="success" onClick={home} disabled={!props.isValid} fullWidth>
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

export default Singup