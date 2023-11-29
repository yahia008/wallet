import React from 'react'
import './login.css'
import { RxAvatar } from "react-icons/rx";
import Button from './button';
import { useFormik } from 'formik';
import { basicSchema } from '../singup';


const Login = () => {
   
    const onSubmit = () => {}
    
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
             
         },
 
         validationSchema:basicSchema,
 
         onSubmit,
 
 
     })
   
  return (
    <>
     
    <div className= 'main'>
    
        <div className='container'>

            <div className='avatar'>
        <RxAvatar color='purple' fontSize='3.5rem' />
       </div>

       <div className='head'>
        <h2>Have an account?</h2>    
        </div>


        <form  
        onSubmit={handleSubmit}
        autoComplete='off'>
        <div className='input'>
            <div>
        <input type='text'
        value={values.name}
        id='name'
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.name && touched.name? "input-error": ""}

        placeholder='username' />

        {errors.name && touched.name? <p className='p-error'>{errors.name}</p>:<></>}
        
            </div>
            
        </div>

        <div className='input'>
            <div>
        <input type='password'
        value={values.pasword}
        id='pasword'
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.pasword && touched.pasword? "input-error": ""}

        placeholder='username' />

        {errors.pasword && touched.pasword? <p className='p-error'>{errors.pasword}</p>:<></>}
        

            </div>
            
        </div>

        <div className='btn'>
         <Button/>
        </div>
        </form>



        </div>


      
    </div>
    
    </>
  )
}

export default Login
