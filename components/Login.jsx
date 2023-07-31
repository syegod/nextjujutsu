import React from 'react'

const Login = ({open,onClose }) => {
    if (!open) return null;
    return (
        <div className='fixed w-full h-full z-1000 ' onClick={onClose}>
            <div className='fixed top-[-10%] right-[50%] p-[50px] z-1000 translate-x-1/2 translate-y-1/2 bg-gray-300 rounded-md' >
                <div className='flex items-center justify-center  '>
                <p className='font-bold text-2xl text-white mb-10 '>Sign in</p>
                </div>
                <p className='font-bold text-xl text-white mb-5'>Enter nickname</p>
                <input type="text" placeholder='Email' className='w-96 rounded outline-none p-1 mb-5' />
                <p className='font-bold text-xl text-white mb-5'>Enter password</p>
                <input type="text" placeholder='Password' className='w-96 rounded outline-none p-1 mb-10'/>
                <div className='flex items-center justify-center '>
                <button className='text-font-bold text-xl text-white border-4 p-2' onClick={onClose}>Confirm</button>
                </div>
              
            </div>
        </div>
    )
}

export default Login