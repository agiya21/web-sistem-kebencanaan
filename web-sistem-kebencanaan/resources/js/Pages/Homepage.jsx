import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import DataTable from '@/Components/Homepage/DataTable'
import Navbar from '@/Components/Homepage/Navbar'


const Homepage = (props) => {
    return (
        <div className='justify-center items-center min-h-screen bg-neutral-800 text-white gap-4'>
            <Head title={props.title} />
            <Navbar />
            <div className='p-4 m-5 bg-slate-700 rounded-box'>
                {/* <h1>{props.description}</h1> */}
                <DataTable databencana={props.databencana} />
            </div>
        </div>
    )
}

export default Homepage