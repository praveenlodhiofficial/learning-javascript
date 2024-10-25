import { NavbarDemo } from '@/app/components/NavbarDemo';
import { requireUser } from '@/lib/hooks';
// import { redirect } from 'next/navigation';
// import { Session } from 'next-auth';


const StudentPricingPage = async() => {
    // const session = await requireUser();
    return ( 
        <>
        <NavbarDemo/>
            <div className='m-60 text-3xl font-semibold text-center'>Welcome to Student Pricing Page</div>
        </>
    )
}

export default StudentPricingPage
