import React from 'react'
import Register from './Register'
import Login from './Login'
import { useState } from 'react'

const Header = () => {
    const [modalRegister, setModalRegister] = useState(false);
    const [modalLogin, setModalLogin] = useState(false);
    return (
        <div className='  flex w-[100%] bg-black  p-4 font-bold'>
            <p className='text-white basis-1/3'>JUJUTSUANIME</p>
            <input type="text" className='basis-1/3 rounded h-7 outline-none mr-72 p-4'/>
            <div className='flex justify-between w-36'>
            <div className='text-white cursor-pointer' onClick={()=>{setModalLogin(true)}}>Sign in</div>
            <div className='text-white cursor-pointer' onClick={()=>{setModalRegister(true)}}>Sign up</div>
           </div>
           {modalRegister && <Register open={modalRegister}  onClose={() => setModalRegister(false)}/>}
           {modalLogin && <Login  open={modalLogin} onClose={() => setModalLogin(false)}/>}
        </div>
    )
}

export default Header