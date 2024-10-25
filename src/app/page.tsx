import React from 'react'
import Navbar from './components/Navbar'
import { auth } from './lib/auth';
import { redirect } from 'next/navigation';
import DashboardPage from './dashboard/page';

const HomePage = async() => {
  const session = await auth();

  // if(session?.user) {
  //   return redirect('/dashboard');
  // }
  return (
    <>
      {/* <Navbar /> */}
      <DashboardPage/>
    </>
  )
}

export default HomePage