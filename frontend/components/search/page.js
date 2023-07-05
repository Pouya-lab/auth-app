"use server"

import { BiSearch } from 'react-icons/bi'
import styles from  '../../styles/vendor/search.scss'

function Search({ value , onChange }) {

  return (
    <>

        <div className='search'>
            <BiSearch size={18}
            className='icon' />

            <input type="text"
            placeholder='Search Users'
            value={value}
            onChange={onChange}
            />

        </div>
    </>
  )
}

export default Search