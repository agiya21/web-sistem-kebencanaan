import { Head } from '@inertiajs/inertia-react'
import React from 'react'


const Login = (props) => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <Head title={props.title} />
            <h1 className='text-3xl font-bold py-5'>Sistem Informasi Kebencanaan Kabupaten Deli Serdang</h1>
            <p className='text-2xl'>Log In</p>
            <div className='flex flex-col p-4 m-5 bg-neutral rounded-box'>
                <form>
                    <div className='pb-3'>
                        <p>Username: </p>
                        <input type="text" className="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <div>
                        Password: <input type="text" className="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <div className="py-4 text-center">
                        <input type="submit" value='Masuk' className="btn btn-accent w-1/2" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login