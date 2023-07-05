"use client";

import Card from '@/components/card/page'
import {AiOutlineMail} from 'react-icons/ai'
import {React , useState} from 'react';
import Link from 'next/link';

import styles from  '../auth.module.scss'
//for using states we need to import both state and react and also add use client at the top of our page


function ForgotPass() {

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
                        <AiOutlineMail size={35} color='#999' />
                    </div>
                    <h2>
                        Forgott Password
                    </h2>
                    
                   

                    <form onSubmit={loginUser} action="" >
                        <input 
                        type="email" 
                        placeholder='Email'
                        required
                        name='email'
                        value={email}
                        onChange={handleInputeChange}
                        />
                        <button type='submit' className='--btn --btn-primary w-full' >
                            Get Reset Email
                        </button>
                            <span className={styles.links} >
                                <Link href='/'  >
                                    Home
                                </Link>
                                <Link href="/auth/login" >
                                    Login
                                </Link>
                        </span>
                    </form>

                    

                </div>
            </Card>
        </div>
    </>
  )
}

export default ForgotPass