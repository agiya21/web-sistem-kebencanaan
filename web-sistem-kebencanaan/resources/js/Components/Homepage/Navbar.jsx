import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar bg-base-200 ">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Sistem Informasi Kebencanaan Deli Serdang</a>
            </div>
            <div className="p-2">
                User
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar