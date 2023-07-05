"use client"

import Layout from "@/components/layout/page"
import PageMenu from "@/components/pageMenu/page"
import Card from "@/components/card/page"
import PasswordInput from '@/components/passwordInput/page'
import { useState } from "react"

import '../../styles/vendor/changePassword.scss'


const initialState = {
   oldPassword : '' ,
   password : '' ,
   password2 : ''
}

function ChangePass() {


    const [formData, setFormData] = useState(initialState)
    const { oldPassword , password , password2 } = formData


    const handleInputeChange = () => {

    }

  return (
    <>
        <Layout>
            <section>
                <div className="container">
                    <PageMenu/>
                    <h2 className="--flex-center" >
                        Change Password
                    </h2>
                    <div className="--flex-center change-password">
                        <Card cardClass={"card"} >
                            <form action="">
                                <p>
                                    <label >Current Password</label>
                                    <PasswordInput
                                        type="password" 
                                        placeholder='Old Password'
                                        name='oldPassword'
                                        value={oldPassword}
                                        onChange={handleInputeChange}
                                        required
                                    />
                                </p>
                                <p>
                                    <label >New Password</label>
                                    <PasswordInput 
                                    type="password"
                                    placeholder='New Password'
                                    value={password}
                                    name = "password"
                                    onChange={handleInputeChange}
                                    />
                                </p>
                                <p>
                                    <label >Confirm New Password</label>
                                    <PasswordInput 
                                    type="password2"
                                    placeholder='Confirm Password'
                                    value={password2}
                                    name = "password2"
                                    onChange={handleInputeChange}
                                    />
                                </p>
                                <button className='--btn --btn-danger w-full'>
                                    Change Password
                                </button>
                            </form>
                        </Card>
                    </div>
                </div>
            </section>
        </Layout>
    </>
  )
}

export default ChangePass