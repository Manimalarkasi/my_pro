import { Button, Stack, TextField } from '@mui/material'
// import { red } from '@mui/material/colors';
import { ErrorMessage, Field,Form, FieldArray,Formik} from 'formik'
import React, { useState } from 'react'
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
    skill:['',''],
    lang:['']
}

const savedValues={
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
    skill:['',''],
    lang:['']
}

const onSubmit= (values , onSubmitProps)=>{
        console.log('form data:',values);
        console.log('submit props', onSubmitProps);
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
    }

    
const validationSchema = Yup.object({
    firstname:Yup.string().min(3, 'must be at least 3 characters long').length(6,'max 6 charactor allowed').required('required!'),
    lastname:Yup.string().lowercase().required('required!'),
    phoneno:Yup.number().max(10).lessThan(9999999999,'must be 10 digit').required('requied!'),
    email:Yup.string().email('invalid email format').required('required!'),
    password:Yup.string().required('required!'),
   comment:Yup.string().required('required'),
//    skill:Yup.array().string().required('required'),
//    social:Yup.object().shape([]).required('required'),
   lang:Yup.array().of(Yup.string().min(4).required('required'))
})
 
const validatesocial=value=>{
    let error
    if(!value){
        error='required!'
    }
    return error
}
// const schemalang=Yup.array().of(Yup.string().min(4).length(4).required('required'))

function Formikcompo2() {
    const [formvalues,setFormvalues] = useState(null)
    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //      validationSchema
    // })

// console.log('form values:', formik.values);
    // console.log('form errors:',formik.errors);
    // console.log('visited fields:' , formik.touched);
  return (
    <Formik initialValues={formvalues || initialValues} validationSchema={validationSchema} onSubmit={onSubmit}
    validateOnMount enableReinitialize
    >

        {
            formik => {
                console.log('formif props',formik);
                return (
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
    <ErrorMessage name='comment'>
    {errormsg => <div className='error'>{errormsg}</div> }
    </ErrorMessage>
    Face Book:
    <Field as={TextField}  label='FaceBook' variant='outlined' type='text' name='social.facebook' placeholder='enter' validate={validatesocial} required/>
    <ErrorMessage name='social.facebook'>
    {errormsg => <div className='error'>{errormsg}</div> }
    </ErrorMessage>
    Twitter:
    <Field as={TextField}  label='Twitter' variant='outlined' type='text' name='social.twitter' placeholder='enter' validate={validatesocial} required/>
    <ErrorMessage name='social.twitter'>
    {errormsg => <div className='error'>{errormsg}</div> }
    </ErrorMessage>
    Primary Skill:
    <Field as={TextField}  label='Primary Skill' variant='outlined' type='text' name='skill[0]' placeholder='enter'  required/>
    Secondary Skill:
    <Field as={TextField}  label='Secondary Skill' variant='outlined' type='text' name='skill[1]' placeholder='enter' required/>
    Languages:
     <FieldArray name='lang' >
        {fieldarrayprop =>{
            console.log('fieldarrayprops',fieldarrayprop);
            const {push,remove,form} = fieldarrayprop
            const {values} = form
            const {lang} = values
            // push,remove,form - from fieldarrayprop
            // values from form
            // lang from values

            return(
                <div>
                    {lang.map((lang,index)=>(
                        <div key={index}>
                            <Field name={`lang[${index}]`} />
                            {index > 0 &&(
                                <button type='button' onClick={()=>remove(index)}>
                                    {' '}
                                   - {' '}
                                </button>
                            )}
                            <button type='button' onClick={()=>push('')}>
                                {' '}+{' '}
                            </button>
                        </div>
                    ))}
                </div>
            )
        }}
     </FieldArray>
     <ErrorMessage name='lang'>
    {errormsg => <div className='error'>{errormsg}</div> }
    </ErrorMessage>

    <Button variant='contained' color='error' type='button' onClick={()=>formik.validateField('phoneno')}>validate phone no</Button>
    <Button variant='contained' color='error' type='button' onClick={()=>formik.validateForm()}>validate all</Button>
    <Button variant='contained' color='info' type='button' onClick={()=>formik.setFieldTouched('password')}>visit password</Button>
    <Button variant='contained' color='info' type='button' onClick={()=>formik.setTouched({
        firstname:true,
        lastname:true,
        phoneno:true,
        password:true,
        email:true,
        comment:true,
        addadress:true,
        social:{
            facebook:true,
            twitter:true
        },
        skill:[true,true],
        lang:true
    })}>visit field</Button>
    <Button variant='contained' color='success' type='submit' onClick={()=>setFormvalues(savedValues)}>load saved data</Button>
    <Button variant='contained' color='success' type='reset' >reset</Button>
    <Button variant='contained' color='success' type='submit' disabled={!formik.isValid}>submit</Button>
    </Stack>
    </Form>
    </div>
 ) } }
    </Formik>
  )
}
export default Formikcompo2



   
    