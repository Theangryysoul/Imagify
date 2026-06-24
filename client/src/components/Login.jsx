import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Login = () => {

    const [state, setState] = useState('Login')
    const {setShowLogin} = useContext(AppContext)

    useEffect(()=>{
        document.body.style.overflow = 'hidden';

        return ()=>{
            document.body.style.overflow = 'unset';
        }
    },[])

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/25 flex justify-center items-center'>
    
    <form className='relative bg-white p-10 rounded-xl text-slate-500 text-center'>
        {state === 'Login' ?<div>
            <h1 className='text-center text-2xl text-neutral-700 font-semibold'>Login</h1>
            <p className='text-sm mt-1.5'>Welcome back! Please login to continue</p>
        </div>
        :
        <div>
            <h1 className='text-center text-2xl text-neutral-700 font-semibold'>Sign Up</h1>
            <p className='text-sm mt-1.5'>Please Register to continue</p>
        </div>}

        {state !== 'Login' && <div className='border px-5 py-1.5 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.profile_icon} className='h-7' alt=""/>
            <input type="text" className='outline-none text-sm' placeholder='Full Name' required/>
        </div>}
        <div className='border px-5 py-1.5 flex items-center gap-2 rounded-full mt-3'>
            <img src={assets.email_icon} alt="" className='ml-2'/>
            <input type="email" className='outline-none text-sm h-7 ml-1' placeholder='Email id' required/>
        </div>
        <div className='border px-5 py-1.5 flex items-center gap-2 rounded-full mt-3 mb-4'>
            <img src={assets.lock_icon} alt="" className='ml-2'/>
            <input type="password" className='outline-none text-sm h-7 ml-2' placeholder='Password' required/>
        </div>
        
        {state === 'Login' && <p className='text-sm text-blue-600 my-4 cursor-pointer text-left'>Forgot password?</p>}

        <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state === 'Login' ? 'Login' : 'Create Account'}</button>

        {state === 'Login' ? <p className='mt-5 text-center'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}>Sign Up</span></p>
        :
        <p className='mt-5 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')}>Login</span></p>}

        <img src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer' onClick={()=>setShowLogin(false)}/>
    </form>

    </div>
  )
}

export default Login