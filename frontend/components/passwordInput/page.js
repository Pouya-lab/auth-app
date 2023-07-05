import { useState } from 'react'
import {BsEye , BsEyeSlash} from 'react-icons/bs'

import './passwordInput.scss'

// we destructor placeholder , name and value which are going to be dynamic
function passwordInput({ placeholder , name , value , onChange , onPaste }) {

    const [showPassword , setShowPassword] = useState(false)

    // const togglePassword = () =>{
    //     setShowPassword(!showPassword)
    // }

  return (
    <>
        <div className="password">
            <input 
                type={showPassword ? "text" : "password"} 
                placeholder={placeholder}
                required
                name={name}
                value={value}
                onChange={onChange}
                onPaste = {onPaste}
            />
            {/* the code below and the relative function works for icon for displaying icon for password but our password input automatically has the icon within it!!! */}
            {/* <div className="icon" onClick={togglePassword} >
                { showPassword ? (<BsEyeSlash size={10}  />)  : (<BsEye size={10} />) }
            </div> */}
        </div>
    </>
  )
}

export default passwordInput