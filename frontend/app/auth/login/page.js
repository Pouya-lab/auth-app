"use client";

import Card from '@/components/card/page'
import PasswordInput from '@/components/passwordInput/page'
import {BiLogIn} from 'react-icons/bi'
import {React , useState} from 'react';
import Link from 'next/link';

import styles from  '../auth.module.scss'
//for using states we need to import both state and react and also add use client at the top of our page


function Login() {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const handleInputeChange = () =>{

    }

    const loginUser = () =>{

    }

  return (
    <>
        <div className={` container ${styles.auth}` }>
            <Card>
                <div className={styles.form}>

                    <div className="--flex-center">
                        <BiLogIn size={35} color='#999' />
                    </div>
                    <h2>
                        Login
                    </h2>
                    <div className="--flex-center">
                        <button className="--btn --btn-google">
                            Login with Google
                        </button>
                    </div>
                    <br />
                    <p className="--text-center --fw-bold" >or</p>

                    <form onSubmit={loginUser} action="" >
                        <input 
                        type="email" 
                        placeholder='email'
                        required
                        name='email'
                        value={email}
                        onChange={handleInputeChange}
                        />
                        <PasswordInput
                            type="password" 
                            placeholder='password'
                            required
                            name='password'
                            value={password}
                            onChange={handleInputeChange}
                        />
                        <button type='submit' className='--btn --btn-primary w-full' >
                            Login
                        </button>
                    </form>
                    <Link href="/auth/forgot-pass" >
                        Forgotten Password??
                    </Link>
                    <span className={styles.register} >
                        <Link href='/' >
                            Home
                        </Link>
                        <p> &nbsp; Don't have an account?</p>
                        <Link href="/auth/register" >
                            Register
                        </Link>
                    </span>
                </div>
            </Card>
        </div>
    </>
  )
}

export default Login