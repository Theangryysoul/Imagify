import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

    const [state, setState] = useState('Login')
    const {setShowLogin, backendUrl, setToken, setUser} = useContext(AppContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {

            if(state === 'Login'){
                const {data} = await axios.post(backendUrl + '/api/user/login', {email, password})

                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                } else{
                    toast.error(data.message)
                }
            } else{
                const {data} = await axios.post(backendUrl + '/api/user/register', {name, email, password})

                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                } else{
                    toast.error(data.message)
                }
            }

        } catch (error) {
            toast.error(data.message)
        }
    }

    useEffect(()=>{
        document.body.style.overflow = 'hidden';

        return ()=>{
            document.body.style.overflow = 'unset';
        }
    },[])

  return (
    <div className='fixed inset-0 z-10 backdrop-blur-sm bg-black/33 flex justify-center items-center'
    onClick={() => setShowLogin(false)}
    >
    
    <motion.form onSubmit={onSubmitHandler}
    
    initial={{opacity: 0.2, y:50}}
    transition={{duration: 0.3}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    
    className='relative bg-white p-10 rounded-xl text-slate-500 text-center' onClick={(e) => e.stopPropagation()}>
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
            <input onChange={e => setName(e.target.value)} value={name} type="text" className='outline-none text-sm' placeholder='Full Name' required/>
        </div>}
        <div className='border px-5 py-1.5 flex items-center gap-2 rounded-full mt-3'>
            <img src={assets.email_icon} alt="" className='ml-2'/>
            <input onChange={e => setEmail(e.target.value)} value={email} type="email" className='outline-none text-sm h-7 ml-1' placeholder='Email id' required/>
        </div>
        <div className='border px-5 py-1.5 flex items-center gap-2 rounded-full mt-3 mb-4'>
            <img src={assets.lock_icon} alt="" className='ml-2'/>
            <input onChange={e => setPassword(e.target.value)} value={password} type="password" className='outline-none text-sm h-7 ml-2' placeholder='Password' required/>
        </div>
        
        {state === 'Login' && <p className='text-sm text-blue-600 my-4 cursor-pointer text-left'>Forgot password?</p>}

        <button className='bg-blue-600 w-full text-white py-2 rounded-full cursor-pointer'>{state === 'Login' ? 'Login' : 'Create Account'}</button>

        {state === 'Login' ? <p className='mt-5 text-center'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}>Sign Up</span></p>
        :
        <p className='mt-5 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')}>Login</span></p>}

        <img src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer' onClick={()=>setShowLogin(false)}/>
    </motion.form>

    </div>
  )
}

export default Login