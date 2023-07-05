import Link from "next/link"


function PageMenu() {
  return (
    <>
         <nav className='--btn-google --p --mb' >
                <ul className='home-links '>
                    <li>
                        <Link href="/profile" >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link href="/changePass" >
                            Change Password
                        </Link>
                    </li>
                    <li>
                        <Link href="/users" >
                            Users
                        </Link>
                    </li>
                </ul>
            </nav>
    </>
  )
}

export default PageMenu