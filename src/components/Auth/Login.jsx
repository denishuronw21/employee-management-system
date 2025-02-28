import React, { useState } from 'react'

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(`email is ${email}, password is ${password}`);
        setEmail("")
        setPassword("")
        
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20'>

                <form onSubmit={(e)=>submitHandler(e)} className='flex flex-col items-center justify-center'>

                    <input 
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                     className=' outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />

                    <input 
                    required 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className=' outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter your password' />

                    <button className='mt-7 text-white outline-none bg-emerald-600 hover:bg-emerald-700 py-3 px-5 text-xl rounded-full placeholder:text-white w-full' >Log in</button>

                </form>
            </div>
        </div>
    )
}

export default Login