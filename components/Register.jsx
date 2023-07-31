import axios from 'axios';
import React from 'react'
import { useState } from 'react';

const Register = ({onClose,open }) => {

    const getReg = async () =>{
        const response = await axios.post('/api/auth/register',form)
    
    }

    const [form,setForm] = useState({
        username:'',
        email:'',
        password:''
    })
    if (!open) return null;
    return (
        <div className='fixed w-full h-full  z-1000 ' onClick={onClose}>
            <div className='fixed top-[20%] right-[37%] p-[50px] z-1000 bg-gray-300 rounded-md' onClick={(e) => {
          e.stopPropagation();
        }}>
                <div className='flex items-center justify-center '>
                <p className='font-bold text-2xl text-white mb-10 '>Sign up</p>
                </div>
                <p className='font-bold text-xl text-white mb-5'>Enter Username</p>
                <input type="text" name='username' placeholder='Username' className='w-96 rounded outline-none p-1 mb-5' onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}}/>
                <p className='font-bold text-xl text-white mb-5'>Enter Email</p>
                <input type="text" name='email' placeholder='Email' className='w-96 rounded outline-none p-1 mb-5' onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}}/>
                <p className='font-bold text-xl text-white mb-5'>Enter Password</p>
                <input type="password" name='password' placeholder='Password' className='w-96 rounded outline-none p-1 mb-10' onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}}/>
                <div className='flex items-center justify-center '>
                <button className='text-font-bold text-xl text-white border-4 p-2'onClick={()=>{onClose();getReg()}}>Confirm</button>
                </div>
              
            </div>
        </div>
    )
}

export default Register