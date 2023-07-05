//these kind of pages are dynamic for user specific ID or email address which are going to be unique to use

"use client";

import Card from '@/components/card/page'
import PasswordInput from '@/components/passwordInput/page';
import {MdPassword} from 'react-icons/md'
import {React , useState} from 'react';
import Link from 'next/link';

import styles from  '../../auth.module.scss'


const initialState = {
  password : "" ,
  password2 : "" ,
}


function UserResetPage({params}) {

  const [formData , setFormData] = useState(initialState)
  const { password , password2 } = formData
  

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
                        <MdPassword size={35} color='#999' />
                    </div>
                    <h2>
                        Reset Password
                    </h2>
                    <form onSubmit={loginUser} action="" >
                    <PasswordInput
                            type="password" 
                            placeholder='New Password'
                            required
                            name='password'
                            value={password}
                            onChange={handleInputeChange}
                        />
                        <PasswordInput
                            type="password" 
                            placeholder='Confirm New Password'
                            required
                            name='password'
                            value={password2}
                            onChange={handleInputeChange}
                        />
                        <button type='submit' className='--btn --btn-primary w-full' >
                            Reset Password
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

export default UserResetPage