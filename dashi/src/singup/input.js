import React from 'react'
import {useFormik} from 'formik'
import { basicSchema } from '.'
import Btn from './buttn'


const Input = () => {

    const onSubmit = ( e, values,{setSubmitting}) => {
      e.preventDefault()
        console.log("submitted")
        setSubmitting(false)
    }

    const {
        values,
        errors,
        handleChange,
        handleBlur,
        touched,
        handleSubmit
    }  = useFormik ({
        initialValues:{
            name:'',
            pasword:'',
            confirmPassword:'',
        },

        validationSchema:basicSchema,

        onSubmit,


    })
    
 console.log(errors)
  return (
    <div className='reg'>
        <form onSubmit={handleSubmit} autoComplete='off'>
      <div >
        <label>username</label>
        <input type='text'
        value={values.name}
        id='name'
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.name && touched.name? "input-error": ""}

        placeholder='username' />

        {errors.name && touched.name? <p className='p-error'>{errors.name}</p>:<></>}
      </div>

      <div>
        <label>password</label>
        <input type='password' placeholder='password'  
         value={values.pasword}
         id='pasword'
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.pasword && touched.pasword? "input-error": ""}
 
          />

         {errors.pasword && touched.pasword? <p className='p-error'>{errors.pasword}</p>:<></>}

      </div>

      <div>
        <label>confirm password</label>
        <input type='password' placeholder='confirm password'
        
        
        value={values.confirmPassword}
        id='confirmPassword'
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.confirmPassword && touched.confirmPassword? "input-error": ""}
/>
        {errors.confirmPassword && touched.confirmPassword? 
        <p className='p-error'>{errors.confirmPassword}</p>:<></>}
      </div>

      <Btn />
      </form>
    </div>
  )
}

export default Input
