import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';

const Login = ({open,onClose }) => {

    const [form,setForm] = useState({
        usernameOrEmail:'',
        password:''
    })
    const getLogin = async () =>{
        const response = await axios.post('/api/auth/login', form);
        console.log(response.data)
    }
    if (!open) return null;
    return (
        <div className='fixed w-full h-full z-1000 ' onClick={onClose}>
            <div className='fixed top-[-10%] right-[50%] p-[50px] z-1000 translate-x-1/2 translate-y-1/2 bg-gray-300 rounded-md' onClick={(e) => {
          e.stopPropagation();
        }}>
                <div className='flex items-center justify-center  '>
                <p className='font-bold text-2xl text-white mb-10 '>Sign in</p>
                </div>
                <p className='font-bold text-xl text-white mb-5'>Enter Username or Email</p>
                <input type="text" name='usernameOrEmail' placeholder='Username' className='w-96 rounded outline-none p-1 mb-5' onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}}/>
                <p className='font-bold text-xl text-white mb-5'>Enter Password</p>
                <input type="password" name='password' placeholder='Password' className='w-96 rounded outline-none p-1 mb-10' onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}}/>
                <div className='flex items-center justify-center '>
                <button className='text-font-bold text-xl text-white border-4 p-2' onClick={()=>{onClose();getLogin()}}>Confirm</button>
                </div>
              
            </div>
        </div>
    )
}

export default Login