import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import DataTable from '@/Components/Homepage/DataTable'


const Homepage = (props) => {
    return(
        <div className='flex flex-col justify-center items-center min-h-screen bg-neutral-800 text-white text-2xl gap-4'>
            <Head title={props.title} />
            <h1>{props.description}</h1>
            <DataTable databencana={props.databencana}/>
        </div>
    )
}

export default Homepage