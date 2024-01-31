import { TextField } from '@mui/material'
import React from 'react'
import FormikInput, { FormikCheckbox, FormikRadio, FormikSelect, FromikTextarea } from './FormikInput'

function FormikControl(props) {
    const {control,...rest} = props
    switch(control){
        case 'input': 
            return <FormikInput {...rest}/>
        case 'textarea':
            return <FromikTextarea {...rest} />
        case 'select':
            return <FormikSelect {...rest} />
        case 'radio' :
            return <FormikRadio {...rest} />
        case 'checkbox' :
          return <FormikCheckbox {...rest} />
        case 'date' :
        default : return null

    }
  return (
    
    <div>
      <p>this component is going to decide which of the different form fields have to be rendered based on one particular prop</p>
      <p>six different form controls so let's add six switch cases and let's add a default case where we returned null </p>

    </div>
  )
}

export default FormikControl
