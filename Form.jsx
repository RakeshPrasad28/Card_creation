import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleFormsubmit}) {
    const {register,handleSubmit,reset} = useForm();
    const handleFormData = (data)=>{
        handleFormsubmit(data);
        reset();
    }
  return (
    <div className='mt-20 flex justify-center'>
      <form className='flex gap-4' onSubmit={handleSubmit(handleFormData)}>
        <input {...register('name')} className='rounded-md px-2 py-1 font-semibold text-base outline-none' type='text' placeholder='name'/>
        <input {...register('email')} className='rounded-md px-2 py-1 font-semibold text-base outline-none' type='text' placeholder='email'/>
        <input {...register('image')} className='rounded-md px-2 py-1 font-semibold text-base outline-none' type='text' placeholder='image'/>
        <input className='rounded-md px-4 py-1 bg-blue-500' type='submit' />
      </form>
    </div>
  )
}

export default Form
