import React from 'react'
import Card from './Card'

const Cards = ({users,removeData}) => {
  return (
    <div className='w-full max-h-72 p-4 flex justify-center gap-4 flex-wrap'>
      {users.map((item,index)=>{
        return <Card id={index} removeData={removeData} user={item} key={index}/>
      })}
      
    </div>
  )
}

export default Cards
