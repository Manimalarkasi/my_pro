import { Button, Stack, TextField } from '@mui/material'
import { red } from '@mui/material/colors';
import { useFormik } from 'formik'
import React from 'react'
import '../App.css'


const initialValues={
    firstname:'',
    lastname:'',
    password:'',
    email:''
}

const onSubmit= values =>{
        console.log('form data:',values);
    }

    const validate= values =>{
                //values.fisyname values.lastname values.password values.email
                //errors.firstname errors.lastname errors.password error.email
                //errors.firstname = 'this feild is required'
                let errors = {}
                  if(!values.firstname){
                    errors.firstname='required'
                  }
    
                  if(!values.lastname){
                    errors.lastname='required'
                  }
    
                  if(!values.email){
                    errors.email='required'
                  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]$/i.test(values.email)){
                    errors.email='invalid email format'
                  }
    
                  if(!values.password){
                    errors.password='required'
                  }
    
                return errors
            }


function Newform() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate})

//  const formik = useFormik({
//         initialValues:{
//              firstname:'',
//              lastname:'',
//              password:'',
//              email:''
//         },
//         onSubmit: values =>{
//             console.log('form data:',values);
//         },
//         validate: values =>{
//             //values.fisyname values.lastname values.password values.email
//             //errors.firstname errors.lastname errors.password error.email
//             //errors.firstname = 'this feild is required'
//             let errors = {}
//               if(!values.firstname){
//                 errors.firstname='required'
//               }

//               if(!values.lastname){
//                 errors.lastname='required'
//               }

//               if(!values.email){
//                 errors.email='required'
//               }

//               if(!values.password){
//                 errors.password='required'
//               }

//             return errors
//         }
//     })
    // console.log('form values:', formik.values);
    // console.log('form errors:',formik.errors);
    console.log('visited fields:' , formik.touched);
  return (
    <div style={{width:400}}  className='page'>
        <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3} direction='column'>
    First Name:
    <TextField label='First name' variant='outlined' type='text' name='firstname' value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
    {formik.touched.firstname&&formik.errors.firstname ? <div className='error'>{formik.errors.firstname}  </div> :null}
    Last Name:
    <TextField label='Last Name' variant='outlined' type='text' name='lastname' value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
    {formik.touched.lastname&&formik.errors.lastname ? <div className='error'>{formik.errors.lastname}  </div> :null}
    password:
    <TextField label='password' variant='outlined' type='password' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
    {formik.touched.password&&formik.errors.password ? <div className='error' >{formik.errors.password}  </div> :null}
    Email:
    <TextField label='email' variant='outlined' type='Email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
    {formik.touched.email&&formik.errors.email ? <div className='error'>{formik.errors.email}  </div> :null}
    <Button variant='contained' color='success' type='submit'>submit</Button>
    </Stack>
    </form>
    </div>
  )
}

export default Newform



   
    