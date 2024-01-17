import { Button, Stack, TextField } from '@mui/material'
import { red } from '@mui/material/colors';
import { useFormik } from 'formik'
import React from 'react'
import '../App.css'
import * as Yup from 'yup'

const initialValues={
    firstname:'',
    lastname:'',
    phoneno:'',
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

                  if(!values.phoneno){
                    errors.phoneno='required'
                  }
    
                  if(!values.email){
                    errors.email='required'
                  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]$/i.test(values.email)){
                    errors.email='invalid email format'
                  }
    
                  if(!values.password){
                    errors.password='required'
                  }
    
                return errors
            }
const validationSchema = Yup.object({
    firstname:Yup.string().min(3, 'must be at least 3 characters long').length(6,'max 6 charactor allowed').required('required!'),
    lastname:Yup.string().lowercase().required('required!'),
    phoneno:Yup.number().max(10).lessThan(11,'must be 10 digit').required('requied'),
    email:Yup.string().email('invalid email format').required('required'),
    password:Yup.string().required('required')
})


function Formicyup() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate,
         validationSchema
    })

// console.log('form values:', formik.values);
    console.log('form errors:',formik.errors);
    console.log('visited fields:' , formik.touched);
  return (
    <div style={{width:400}}  className='page'>
        <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3} direction='column'>
    First Name:
    <TextField label='First name' variant='outlined' type='text' name='firstname' value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
    {formik.touched.firstname&&formik.errors.firstname ? <div className='error'>{formik.errors.firstname}  </div> :null}
    Last Name:
    <TextField label='Last Name' variant='outlined' type='text' name='lastname' {...formik.getFieldProps('lastname')} required/>
    {formik.touched.lastname&&formik.errors.lastname ? <div className='error'>{formik.errors.lastname}  </div> :null}
    Phone no:
    <TextField label='Phone no' variant='outlined' type='text' name='phoneno' {...formik.getFieldProps('phoneno')} required/>
    {formik.touched.phoneno &&formik.errors.phoneno ? <div className='error'>{formik.errors.phoneno}  </div> :null}
    password:
    <TextField label='password' variant='outlined' type='password' name='password' {...formik.getFieldProps('password')} required/>
    {formik.touched.password&&formik.errors.password ? <div className='error' >{formik.errors.password}  </div> :null}
    Email:
    <TextField label='email' variant='outlined' type='Email' name='email' {...formik.getFieldProps('email')} required/>
    {formik.touched.email&&formik.errors.email ? <div className='error'>{formik.errors.email}  </div> :null}
    <Button variant='contained' color='success' type='submit'>submit</Button>
    </Stack>
    </form>
    </div>
  )
}

export default Formicyup



   
    