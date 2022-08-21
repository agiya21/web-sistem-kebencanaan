import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar bg-base-200 ">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Sistem Informasi Kebencanaan Deli Serdang</a>
            </div>

            {/** Label for "Insert Data" Button */}
            <label for="my-modal-3" class="btn modal-button btn-primary">Insert Data</label>

            <input type="checkbox" id="my-modal-3" class="modal-toggle" /> {/** Toggle for Modal */}
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/** Insert Data Content */}
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    Type Something: <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                    <label for="my-modal-3" className='btn btn-md btn-accent'>Insert Data</label>

                </div>
            </div>

            <div className="p-3">
                Agiya Yoshua
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Navbar