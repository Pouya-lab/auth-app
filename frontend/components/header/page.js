import Link from 'next/link'
import '../../styles/vendor/header.scss'
import {BiLogIn} from 'react-icons/bi'
import {FaUserCircle} from 'react-icons/fa'


 

function Header() {
  


  return (
    <>
      <header className='header'>
        <nav className='' >

          <Link className='logo' href="/" >
                <BiLogIn className='--color-white' size={90} />
                <span className=' --color-white'>Pouya AUTH</span>       
          </Link>

          <ul className='home-links '>
            <li className='--flex-center' >
              <FaUserCircle className="--color-white" size={40} />
              <p className="--color-white">
                Hi , Pouya
              </p>
            </li>
            <li>
              <button className='--btn --btn-primary'>
                  <Link href='/auth/login' >Login</Link>
              </button>
            </li>
            <li className='--btn --btn-primary'>
              <Link href='/profile' >Profile</Link>
            </li>
            <li>
              <button className='--btn --btn-secondary'>
                  Logout
              </button>
            </li>
          </ul>

        </nav>
      </header>
    </>
  )
}

export default Header