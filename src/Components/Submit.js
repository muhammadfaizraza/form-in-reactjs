import React, { useState } from 'react'

const Submit = () => {
 const [registeration , setregisteration]  = useState({
    uname: '',
    phone: '',
    email: '',
    password: ''


 })

 const [records , setrecords ] = useState([])
  
  
  
  
  
  
  const handleChange =(e)=>{
const Name = e.target.name 
const value = e.target.value


setregisteration({...registeration , [Name] : value})

}
  
  
const handleSubmit = (e)=>{

e.preventDefault()
const newRecord  = {...registeration ,id: new Date().getDate().toString()}

setrecords(...records , newRecord)

console.log(records)
}  
  
  
  
  
  
    return (
   <form action = '' onSubmit={handleSubmit}>
    <div><label htmlFor='name'>Name</label>
<input type='text' autoComplete='off' onChange={handleChange} name ='uname' placeholder='name' value={registeration.name} ></input>
</div>

<div><label htmlFor='phone'>Phone</label>
<input type='text' autoComplete='off' onChange={handleChange} name ='phone' placeholder='phone'  value={registeration.phone} ></input>
</div>


<div><label htmlFor='email'>email</label>
<input type='email' autoComplete='off' onChange={handleChange} name ='email' placeholder='email' value={registeration.email}></input>
</div>
   
<div><label htmlFor='password'>password</label>
<input type='password' autoComplete='off' onChange={handleChange} name ='password' placeholder='password' value={registeration.password} ></input>
</div>
   
   <button type='submit'> Add Registeration</button>
   </form>
  )
}

export default Submit