"use client"

import Layout from '@/components/layout/page'
import Card from '@/components/card/page'
import Image from 'next/image'
import profile from '../../assets/starter.jpg'
import { useState } from 'react'

import '../../styles/vendor/profile.scss'
import PageMenu from '@/components/pageMenu/page'

const initialState = {
    name : '',
    email : '',
    phone : '',
    bio : '',
    photo : '',
    role : '',
    isVerified : false,
}

function Profile() {

    const [profile, setProfile] = useState(initialState)
    const { name , email , phone , bio , photo , role , isVerified } = profile


    const handleImageChange = () => {

    }

    const handleInputChange = () =>{

    }

  return (
    <>
      <Layout>
        <section>
            <div className="container">
                <PageMenu/>
                <h2>
                    Profile
                </h2>
                <div className="--flex-start profile">
                    <Card cardClass={"card"} >
                        <>
                            <div className="profile-photo">
                                <div className="">
                                <Image src={profile} alt="ProfileImg" />
                                <h3>Role : Subscriber</h3>
                                </div>
                            </div>
                        </>
                        <form action="">
                            <p>
                                <label >Change Photo</label>
                                <input 
                                type="file"
                                accept = "image/#"
                                name = "image"
                                onChange={handleImageChange}
                                />
                            </p>
                            <p>
                                <label >Name</label>
                                <input 
                                type="text"
                                value={name}
                                name = "name"
                                onChange={handleInputChange}
                                />
                            </p>
                            <p>
                                <label >Email</label>
                                <input 
                                type="email"
                                value={email}
                                name = "email"
                                onChange={handleInputChange}
                                disabled
                                />
                            </p>
                            <p>
                                <label >Phone</label>
                                <input 
                                type="text"
                                value={phone}
                                name = "phone"
                                onChange={handleInputChange}
                                />
                            </p>
                            <p>
                                <label >Bio</label>
                                <textarea 
                                name="bio" 
                                cols="30" 
                                rows="10"
                                value={bio}
                                onChange={handleInputChange}
                                />
                            </p>
                            <button className='--btn --btn-primary w-full'>Update Profile</button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
      </Layout>
    </>
  )
}

export default Profile


