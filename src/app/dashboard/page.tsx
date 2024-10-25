import { requireUser } from '@/lib/hooks';
// import { redirect } from 'next/navigation';
// import { Session } from 'next-auth';


const DashboardPage = async() => {
    // const session = await requireUser();
    return ( 
        <>
            <div className='m-60 text-3xl font-semibold text-center'>Welcome to Dashboard Page</div>
        </>
    )
}

export default DashboardPage
