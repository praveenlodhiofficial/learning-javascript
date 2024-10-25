import { Button } from '@/components/ui/button'
import React from 'react'
import AuthModal from './AuthModal'

const Navbar = () => {
  return (
    <div className='bg-blue-400 flex justify-between items-center p-2 m-2 rounded-lg'>
        <h1>HOMEPAGE</h1>
        <AuthModal/>
    </div>
  )
}

export default Navbar