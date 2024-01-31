import { Button, FormControlLabel, Grid, Paper,Radio,RadioGroup,Stack,FormGroup,Checkbox } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup'
import './Styleformik.css'
import FormikControl from './FormikControl';

function FormikContainer() {
    const dropdownoption =[
        {key:'Select an option',value:''},
        {key:'option1', value:'option1'},
        {key:'option2',value:'option2'},
       {key:'option3', value:'option3'} 
    ]
    const graduateopt =[
        {key:'UG',value:'UG'},
        {key:'PG', value:'PG'},
        {key:'deplamo',value:'deplamo'},
    ]
    const progopt =[
      {key:'HTML' , value:'HTML'},
      {key:'css' , value:'css'},
      {key:'js' , value:'js'},
      {key:'python' , value:'python'},
      {key:'java' , value:'java'},

    ]
    const initialValues ={
        firstname:'',
        lastname:'',
        mailid:'',
        password:'',
        conformpassword:'',
        dob:'',
        phoneno:'',
        address:'',
        job:'',
        skill:'',
        lang:'',
        discription:'',
        selectoption:'',
        gender:'',
        prog:[],
    }
    const validationSchema =Yup.object({
        firstname:Yup.string().max(15).uppercase().required('Required!'),
        lastname:Yup.string().max(10).uppercase().required('Required!'),
        dob:Yup.date().required('Required!'),
        phoneno:Yup.number().lessThan(11,'must be 10 digit').required('Rquired!'),
        mailid:Yup.string().email('invalid email format').required('Required!'),
        password:Yup.mixed('must 1 special char,caps & number ').required('Required'),
        conformpassword:Yup.string().oneOf([Yup.ref("password")],'this password is not match').required('Required!'),
        // discription:Yup.string().required('Required!'),
        selectoption:Yup.string().required('Required!'),
        // gender:Yup.string().required('Required!'),
        prog:Yup.array().required('Required'),

    })
    const onSubmit = values =>{
      console.log('Form data',values);
    }
   
  return (
    <div>
        <Grid>
        <Paper elevation={24} style={{width:450 ,padding: "30px 20px",//margin: "20px auto",
        backgroundColor: "violet",
          }} className='register-paper'>
            <h3>REGISTRATION FORM</h3>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnMount>
        {
            formik =>{
            console.log('formif props',formik);
            return(
            <Form className='form'>
                <Stack spacing={3} direction='column'> 
                <FormikControl control='input' type='text' label='First Name' name='firstname' fieldname='First Name:' {...formik.getFieldProps('firstname')}/>
                <FormikControl control='input' type='text' label='Last Name' name='lastname' fieldname='Last Name' />
                Gender:
                <RadioGroup style={{lineHeight:0.3}} name='gender'>
                  <FormControlLabel value='male' control={<Radio />} label='male' />
                  <FormControlLabel value='female' control={<Radio />} label='female' />
                  <FormControlLabel value='others' control={<Radio />} label='others' />
                </RadioGroup>
                <FormikControl control='input' type='date' label='dob' name='dob' fieldname='DOB' {...formik.getFieldProps('dob')}/>
                <FormikControl control='radio' label='graduate' name='graduate' options={graduateopt} fieldname='graduate'  />
                <FormikControl control='input' type='email' label='Email' name='mailid' fieldname='Email ID' />
                <FormikControl control='input' type='password' label='Password' name='password' fieldname='Password' />
                <FormikControl control='input' type='password' label='conform Password' name='conformpassword' fieldname='Conform Password' />
                <FormikControl control='input' type='text' label='Phone no' name='phoneno' fieldname='Phone No' {...formik.getFieldProps('phoneno')} onBlur={formik.handleBlur} />
                <FormikControl control='select' label='Select a topic' name='selectoption' options={dropdownoption} fieldname='Select a topic' onBlur={formik.handleBlur} />
                 <FormikControl control='textarea' label='decription' name='description' fieldname='Description'/>
                 <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="HTML" />
                   <FormControlLabel required control={<Checkbox />} label="CSS" />
                   <FormControlLabel  control={<Checkbox />} label=".NET" />
                   <FormControlLabel  control={<Checkbox />} label="AI" />
                   <FormControlLabel  control={<Checkbox />} label="python" />
                   <FormControlLabel  control={<Checkbox />} label="Java" />
                    <FormControlLabel disabled control={<Checkbox />} label="JS" />
                  </FormGroup>
                  <FormikControl control='checkbox' label='programming languadge' name='prog' options={progopt}  fieldname='programming languadge'/>
                <Button variant='contained' color='success' type='submit' disabled={!formik.isValid}>submit</Button>
                </Stack>
            </Form>
       ) }}
      </Formik>
      </Paper>
      </Grid>
    </div>
  )
}

export default FormikContainer
