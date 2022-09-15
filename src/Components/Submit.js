import React, { useState } from 'react'
import '../Style/Submit.css'

const Submit = () => {
   const [registeration, setregisteration] = useState({
      uname: '',
      phone: '',
      email: '',
      password: ''


   })

   const [records, setrecords] = useState([])






   const handleChange = (e) => {
      const name = e.target.name
      const value = e.target.value


      setregisteration({ ...registeration, [name]: value })
   }


   const handleSubmit = (e) => {

      e.preventDefault();
      const newRecord = { ...registeration, id: new Date().getDate().toString() }
      console.log(newRecord)
      setrecords([...records, newRecord])

      setregisteration({
         uname: '  ',
         phone: '  ',
         email: '  ',
         password: '    '
      })

   }



   return (
      <>
         <div className='login-div'>
            <form action='' onSubmit={handleSubmit}>
               <div className='fields'>
                  <input required className='password'  type='text' autoComplete='off' onChange={handleChange} name='uname' placeholder='name' value={registeration.name} ></input>
               </div>

               <div className='fields'>
                  <input  required className='password'type='text' autoComplete='off' onChange={handleChange} name='phone' placeholder='phone' value={registeration.phone} ></input>
               </div>


               <div className='fields'>
                  <input className='password' type='email' autoComplete='off' onChange={handleChange} name='email' placeholder='Email' value={registeration.email}></input>
                  <div className='fields'>
                  <input className='password' type='password' autoComplete='off' onChange={handleChange} name='password' placeholder='Password' value={registeration.password} ></input>
               </div>


               </div>

               <button type='submit' className='signin'> Add Registeration</button>

            </form>
            <div>
            {records.map((record, index) => { //const. map over each column I needed
                            return (
                                <div key={index} className>
                                    <p>{record.uname}</p>
                                    <p>{record.email}</p>
                                    <p>{record.phone}</p>
                                    <p>{record.password}</p>
                                </div>
                            );
                        })}


            </div>
         </div>
      </>
   )
}

export default Submit