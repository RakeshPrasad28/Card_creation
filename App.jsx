import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

function App() {
  const [users,setUsers] = useState([]);
  const handleFormsubmit =(data)=>{
    setUsers([...users,data])
  }
  const removeData=(id)=>{
    setUsers(()=>users.filter((item,index)=>{
      return index!=id;
    }))
  }
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col items-center justify-center p-4'>
      <div className='container mx-auto'>
        <Cards users={users}  removeData={removeData}/>
      </div>
      <Form handleFormsubmit={handleFormsubmit}/>
    </div>
  )
}

export default App
