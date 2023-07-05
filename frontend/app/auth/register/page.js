"use client";

import Card from '@/components/card/page'
import PasswordInput from '@/components/passwordInput/page'
import {TiUserAddOutline} from 'react-icons/ti'
import { BsCheck2All } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import {React , useEffect, useState} from 'react';
import Link from 'next/link';
import styles from '../auth.module.scss'
//for using states we need to import both state and react and also add use client at the top of our page


const initialState = {
    name : "" ,
    password : "" ,
    password2 : "" ,
    email : ""
}

function Register() {

    const [formData , setFormData] = useState(initialState)
    const {name , email , password , password2 } = formData
    //code above helps us to write name and other properties easier than formData.name , formData.email and .....

    //for checking passwords strength
    const [upperCase, setUpperCase] = useState(false)
    const [num, setNum] = useState(false)
    const [specialChar, setSpecialChar] = useState(false)
    const [passLenght, setPassLenght] = useState(false)
    //icons for checking passwords strength
    const timesIcon = <FaTimes size={15} color="red"/>;
    const checkIcon = <BsCheck2All size={15} color='green' />

    const switchIcon = (condition)=>{
        if(condition){
            return checkIcon
        }
        return timesIcon
    }

    //function below helps us to set value inside input
    const handleInputeChange = (e) =>{
         const {name , value} = e.target
         setFormData({ ...formData , [name] : value })
    }

    // Password Strength
// Check Lower and Uppercase
// match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)

// Check For Numbers
// match(/([0-9])/)

// Check For Special char
// match(/([!,%,&,@,#,$,^,*,?,_,~])/)

// Check email
// match: [
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//         "Please enter a valid emaial",
//       ],


// Validate email
// export const validateEmail = (email) => {
//   return email.match(
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   );
// };

    //checking for password strength
    useEffect( () => {
        //checking for uppercase and lowercase password
        if(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
            setUpperCase(true)
        }
        else{
            setUpperCase(false)
        }
        if (password.match(/(["0-9"])/)) {
            setNum(true)
        } else {
            setNum(false)
        }
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~,'])/)) {
            setSpecialChar(true)
        } else {
            setSpecialChar(false)
        }
        if (password.length > 5) {
            setPassLenght(true)
        } else {
            setPassLenght(false)
        }
    }, [password] )
    

    const loginUser = () =>{

    }

  return (
    <>
        <div className={` container ${styles.auth}` }>
            <Card>
                <div className={styles.form}>

                    <div className="--flex-center">
                        <TiUserAddOutline size={35} color='#999' />
                    </div>
                    <h2>
                        Register
                    </h2>

                    <p className="--text-center --fw-bold" >or</p>

                    <form onSubmit={loginUser} action="" >
                        <input 
                        type="text" 
                        placeholder='Name'
                        required
                        name='name'
                        value={name}
                        onChange={handleInputeChange}
                        />
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
                        <PasswordInput
                            type="password" 
                            placeholder=' Confirm Password'
                            required
                            name='password2'
                            value={password2}
                            onChange={handleInputeChange}
                        />

                        {/* password strenght */}
                        <Card cardClass = {styles.group}>
                            <ul className='form-list' >
                                <li>
                                    <span className={styles.indicator}>
                                        {switchIcon(upperCase)}
                                        &nbsp; LowerCase and UpperCase
                                    </span>
                                </li>
                                <li>
                                    <span className={styles.indicator}>
                                        {switchIcon(num)}
                                        &nbsp; Number (0-9)
                                    </span>
                                </li>
                                <li>
                                    <span className={styles.indicator}>
                                        {switchIcon(specialChar)}
                                        &nbsp; Special Character #$%*&
                                    </span>
                                </li>
                                <li>
                                    <span className={styles.indicator}>
                                        {switchIcon(passLenght)}
                                        &nbsp; At least 6 Character
                                    </span>
                                </li>
                            </ul>
                        </Card>

                        <button type='submit' className='--btn --btn-primary w-full' >
                            Register
                        </button>
                    </form>
                    <span className={styles.register} >
                        <Link href='/' >Home</Link>
                        <p> &nbsp; Already have an account?</p>
                        <Link href="/auth/login" >
                            Login
                        </Link>
                    </span>
                </div>
            </Card>
        </div>
    </>
  )
}

export default Register