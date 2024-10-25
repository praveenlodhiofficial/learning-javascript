import React from 'react'
import Navbar from './components/Navbar'
import { auth } from './lib/auth';
import { redirect } from 'next/navigation';

const HomePage = async() => {
  const session = await auth();

  if(session?.user) {
    return redirect('/dashboard');
  }
  return (
    <>
      <Navbar />
    </>
  )
}

export default HomePage