import { MenuItem, Select, TextField,} from '@mui/material'
import { ErrorMessage, Field } from 'formik'
import React from 'react'

function FormikInput(props) {
    const {lable,fieldname,name,...rest} =props
  return (
    <div className='input'>
      <lable htmlFor={fieldname}>{fieldname}</lable>
      <Field as={TextField} variant='outlined' label={name} id={name} name={name} {...rest}/>
      <ErrorMessage name={name} >
      {errormsg => <div className='error'>{errormsg}</div> }
      </ErrorMessage>
    </div>
  )
}

export default FormikInput

export function FromikTextarea(props) {
    const {lable,name,fieldname,...rest} =props
  return (
    <div className='input'>
      <lable htmlFor={fieldname}>{fieldname}</lable>
      <Field as='textarea' id={name} name={name} {...rest}/>
      <ErrorMessage name={name} >
      {errormsg => <div className='error'>{errormsg}</div> }
      </ErrorMessage>
    </div>
  )
}



export function FormikSelect(props) {
    const {lable,name,fieldname,options,...rest} =props

  return (
    <div className='input'>
      <lable htmlFor={fieldname}>{fieldname}</lable>
      <Field as={Select} id={name} name={name} {...rest}>
        {options.map(option=>{
            return(
            <MenuItem key={option.value} value={option.value}>
                {option.key}
            </MenuItem>)
        })}
      </Field>
      <ErrorMessage name={name} >
      {errormsg => <div className='error'>{errormsg}</div> }
      </ErrorMessage>
    </div>
  )
}



export function FormikRadio(props) {
    const {lable,name,fieldname,options,...rest} =props
  return (
    <div className='input'>
       <lable htmlFor={fieldname}>{fieldname}</lable>
      <Field as={Select} name={name} {...rest}>
        {({field})=>{
                  return options.map((option)=>{
                    return(
                    <React.Fragment key={option.key}>
                          <input type='radio' value={option.value} id={option.value} {...field}  checked={field.value ===option.value}  />
                          <lable htmlFor={option.value}>{option.key}</lable>
                    </React.Fragment>)
                  })
            }
        }
      </Field>
      <ErrorMessage name={name} >
      {errormsg => <div className='error'>{errormsg}</div> }
      </ErrorMessage>
    </div>
  )
}


export function FormikCheckbox(props) {
  const {lable,name,fieldname,options,...rest} =props
return (
  <div className='input'>
     <lable htmlFor={fieldname}>{fieldname}</lable><br />
    <Field  name={name} {...rest}>
      {({field})=>{
                return options.map((option)=>{
                  return(
                  <React.Fragment key={option.key}>
                        <input type='checkbox' value={option.value} id={option.value} {...field}  checked={field.value.includes(option.value)}  />
                        <lable htmlFor={option.value}>{option.key}</lable><br />
                  </React.Fragment>
                  )})
          }
      }
    </Field>
    <ErrorMessage name={name} >
    {errormsg => <div className='error'>{errormsg}</div> }
    </ErrorMessage>
  </div>
)
}

