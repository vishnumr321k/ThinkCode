import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='bg-black '>
            <div className='container mx-auto flex justify-between items-center py-4 px-6'>
                <h1 className='text-white text-xl font-semibold'>ThinkCode</h1>
            <nav className='flex  items-center space-x-6'>
                <ul className=' flex space-x-4 text-white '>
                    <li>Purpose</li>
                    <li>About us</li>
                </ul>
                <button className='text-white cursor-pointer'>Sign in</button>
            </nav>
            </div>
            
        </div>
    </header>
  )
}

export default Header