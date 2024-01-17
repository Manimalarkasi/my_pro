import { Button, Stack, TextField } from '@mui/material'
import { red } from '@mui/material/colors';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik'
import React from 'react'
import '../App.css'
import * as Yup from 'yup'

const initialValues={
    firstname:'',
    lastname:'',
    phoneno:'',
    password:'',
    email:'',
    comment:'',
    addadress:'',
    social:{
        facebook:'',
        twitter:''
    },
    skill:['','']
}

const onSubmit= values =>{
        console.log('form data:',values);
    }

    
const validationSchema = Yup.object({
    firstname:Yup.string().min(3, 'must be at least 3 characters long').length(6,'max 6 charactor allowed').required('required!'),
    lastname:Yup.string().lowercase().required('required!'),
    phoneno:Yup.number().max(10).lessThan(11,'must be 10 digit').required('requied!'),
    email:Yup.string().email('invalid email format').required('required!'),
    password:Yup.string().required('required!'),
    // password:Yup.string().required('required!')
    // social:({
    //      facebook:Yup.string().required('required!'),
    //      twitter:Yup.string().required('required!')
    // })
    

})


function Formikcompo1() {
    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //      validationSchema
    // })

// console.log('form values:', formik.values);
    // console.log('form errors:',formik.errors);
    // console.log('visited fields:' , formik.touched);
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    <div style={{width:400}}  className='page'>
        <Form>
        <Stack spacing={3} direction='column'>
    First Name:
    <Field as={TextField}  label='First name' variant='outlined' type='text' name='firstname' placeholder='enter' required/>
    <ErrorMessage name='firstname' >
        {errormsg => <div className='error'>{errormsg}</div> }
    </ErrorMessage>
    Last Name:
    <Field as={TextField}  label='Last Name' variant='outlined' type='text' name='lastname' placeholder='enter' required/>
    <ErrorMessage name='lastname'>
    {errormsg => <div className='error'>{errormsg}</div> }
    </ErrorMessage>
    Phone no:
    <Field as={TextField}  label='Phone no' variant='outlined' type='text' name='phoneno' placeholder='enter' required/>
    <ErrorMessage name='phoneno'>
    {errormsg => <div className='error'>{errormsg}</div> }
    </ErrorMessage>
    password:
    <Field as={TextField}  label='password' variant='outlined' type='password' name='password' placeholder='enter'  required/>
    <ErrorMessage name='password'>
    {errormsg => <div className='error'>{errormsg}</div> }
    </ErrorMessage>
    Email:
    <Field as={TextField}  label='email' variant='outlined' type='Email' name='email' placeholder='enter' required/>
    <ErrorMessage name='email'  component={(props)=>{return <div className='error'>{props.children}</div>}} />
    address:
    <Field as={TextField}  label='addadress' variant='outlined' type='text' name='addadress' placeholder='enter'  required>
        {
            (props)=>{
                const {field,form,meta} = props
                console.log('render props',props);
                return(
                    <div>
                        <TextField type='text' id='address' {...field}/>
                        {meta.touched && meta.error ? <div>{meta.error}</div> :null}
                    </div>
                ) 
            } }
    </Field>
    Reference:
    <Field as='textarea' label='reference'  type='text' name='comment' placeholder='enter' required/>
    Face Book:
    <Field as={TextField}  label='FaceBook' variant='outlined' type='text' name='social.facebook' placeholder='enter' required/>
    <ErrorMessage name='social.facebook'>
    {errormsg => <div className='error'>{errormsg}</div> }
    </ErrorMessage>
    Twitter:
    <Field as={TextField}  label='Twitter' variant='outlined' type='text' name='social.twitter' placeholder='enter'/>
    <ErrorMessage name='social.twitter'>
    {errormsg => <div className='error'>{errormsg}</div> }
    </ErrorMessage>
    <Field as={TextField}  label='Primary Skill' variant='outlined' type='text' name='skill[0]' placeholder='enter' required/>
    <Field as={TextField}  label='Secondary Skill' variant='outlined' type='text' name='skill[1]' placeholder='enter' required/>
    <Button variant='contained' color='success' type='submit'>submit</Button>
    </Stack>
    </Form>
    </div>
    </Formik>
  )
}

export default Formikcompo1



   
    