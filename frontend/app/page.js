"use client"

import baymax from '../assets/baymax.jpg'
import Layout from '@/components/layout/page'
import Image from 'next/image'
import Link from 'next/link'

import '../styles/vendor/home.scss'
import { useState } from 'react'
import Loader from '@/components/loader/page'

function Index() {

  const [show , setShow] = useState(true)

  return (
    <>
        { !show ? <Loader/> : (
          <>
            <Layout>
          <section className="container hero" >
            <div className="hero-text">
              <h2>
                Ultimate MERN Stack Authentication App
              </h2>
              <p>
                First Full Stack application made from Scratch
              </p>
              <p>
                Using Node JS Next Js MongoDB Express JS
              </p>
              <div className="hero-buttons --flex-start">
                <button className="--btn --btn-danger">
                  <Link href="/auth/register" >
                    Register
                  </Link>
                </button>
                <button className="--btn --btn-primary">
                  <Link href="/auth/login" >
                    Login
                  </Link>
                </button>
              </div>
            </div>

            <div className="hero-image">
              <Image src={baymax} alt="Auth" />
            </div>

        </section>
        </Layout>
          </>
        ) }
    </>
  )
}

export default Index