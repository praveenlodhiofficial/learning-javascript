import { NavbarDemo } from '@/app/components/NavbarDemo';
import { requireUser } from '@/lib/hooks';
// import { redirect } from 'next/navigation';
// import { Session } from 'next-auth';


const ProPricingPage = async() => {
    // const session = await requireUser();
    return ( 
        <>
        <NavbarDemo/>
            <div className='m-60 text-3xl font-semibold text-center'>Welcome to Pro Pricing Page</div>
        </>
    )
}

export default ProPricingPage
