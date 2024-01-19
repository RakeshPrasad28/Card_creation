import React from 'react'

const Card = ({user,removeData,id}) => {
  return (
    <div className='w-[17vw] h-full bg-sky-300 rounded-lg flex flex-col items-center p-2'>
      <div className='image w-[8vw] h-[6rem] bg-zinc-600 rounded-full overflow-hidden'>
        <img className='w-full h-full object-cover' src={user.image} alt=''/>
      </div>
      <h1 className='mt-1 font-semibold text-xl text-center'>{user.name}</h1>
      <h2 className='text-center opacity-50'>{user.email}</h2>
      <p className='mt-3 text-center text-sm leading-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facere nesciunt nam possimus nisi aliquid expedita tempora ducimus eligendi neque?</p>
      <button onClick={()=>removeData(id)} className='mt-3 text-white font-semibold px-3 py-1 bg-red-600 rounded-lg'>Remove it</button>
    </div>
  )
}

export default Card
