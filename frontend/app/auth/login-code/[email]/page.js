//these kind of pages are dynamic for user specific ID or email address which are going to be unique to use
"use client";

import Card from '@/components/card/page'
import {LiaUnlockAltSolid} from 'react-icons/lia'
import {React , useState} from 'react';
import Link from 'next/link';

import styles from  '../../auth.module.scss'
//for using states we need to import both state and react and also add use client at the top of our page


function LoginCode() {

    const [loginCode , setLoginCode] = useState('')

    const loginUser = ()=>{

    }

  return (
    <>
        <div className={` container ${styles.auth}` }>
            <Card>
                <div className={styles.form}>

                    <div className="--flex-center">
                        <LiaUnlockAltSolid size={35} color='#999' />
                    </div>
                    <h2>
                        Enter Access Code
                    </h2>

                    <form onSubmit={loginUser} action="" >
                        <input 
                        type="text" 
                        placeholder='Access Code'
                        name='loginCode'
                        value={loginCode}
                        onChange={(e) =>{
                            setLoginCode( e.target.value )
                        }}
                        required
                        />
                        <button type='submit' className='--btn --btn-primary w-full' >
                            Proceed To Login
                        </button>
                        <span className='--flex-center' >
                            Check your email for login access code
                        </span>
                            <span className={styles.links} >
                                <Link href='/'  >
                                    Home
                                </Link>
                                <p className='v-link --color-primary' >
                                    <b>
                                        Resend Code
                                    </b>
                                </p>
                        </span>
                    </form>
                 </div>
            </Card>
        </div>
    </>
  )
}

export default LoginCode