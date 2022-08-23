import { Head } from "@inertiajs/inertia-react"
import React from "react"

const InsertData = (props) => {
    return (
        <div>
            <Head title={props.title} />
            <h1 className="py-5 text-center text-4xl font-bold">Insert Data Kebencanaan</h1>
            <div className="rounded-box bg-base-300 lg:px-40 lg:py-5 lg:mx-64">
                <form>
                    <div className='flex flex-col py-4 ml-5'>
                        Jenis Bencana:
                        <div>
                            <select id="bencana" className='rounded-xl py-1 text-black'>
                                <option value="banjir">Banjir</option>
                                <option value="kebakaran">Kebakaran</option>
                                <option value="angin_puting_beliung">Angin Puting Beliung</option>
                                <option value="gempa_bumi">Gempa</option>
                                <option value="longsor">Longsor</option>
                                <option value="tsunami">Tsunami</option>
                            </select>
                        </div>
                        Waktu Kejadian:
                        <div className="py-2 text-black">
                            <input type='datetime-local' className="rounded-xl py-1" />
                        </div>
                        Lokasi:
                        <br />
                        Kecamatan:
                        <div>
                            <select id="kecamatan" className='rounded-xl py-1 text-black'>
                                <option value="kec1">Kec 1</option>
                                <option value="kec2">Kec 2</option>
                                <option value="kec3">Kec 3</option>
                            </select>
                        </div>
                        Desa/Kelurahan:
                        {/** Ini tampilinnya berdasarkan pilihan Kecamatan */}
                        <div>
                            <select id="deskel" className='rounded-xl py-1 text-black'>
                                <option value="des1">Des 1</option>
                                <option value="des2">Des 2</option>
                                <option value="kel1">Kel 3</option>
                            </select>
                        </div>
                        Dusun/Lingkungan:
                        {/** Ini tampilinnya berdasarkan pilihan desa/kelurahan */}
                        <div>
                            <select id="dusling" className='rounded-xl py-1 text-black'>
                                <option value="dus1">Dus 1</option>
                                <option value="dus2">Dus 2</option>
                                <option value="ling1">Ling 1</option>
                            </select>
                        </div>
                        Alamat:
                        <div class="form-control py-2">
                            <textarea class="textarea textarea-bordered h-24 w-1/2" placeholder="Alamat lengkap"></textarea>
                        </div>

                        Fasilitas:
                        <div>
                            <select id="fasilitas" className='rounded-xl py-1 text-black'>
                                <option value="rumah_ibadah">Rumah Ibadah</option>
                                <option value="rumah_tempat_tinggal">Rumah Tempat Tinggal</option>
                                <option value="sekolah">Sekolah</option>
                                <option value="pertanian_perkebunan">Pertanian/Perkebunan</option>
                            </select>
                        </div>
                        Keterangan Fasilitas:
                        <div className="pt-1 pb-3">
                            <input type="text" placeholder="ex. Rumah Pak Tarno" class="input input-bordered input-sm w-full max-w-xs" />
                        </div>
                        <div>
                            Tingkat Kerusakan:
                            {/** Help untuk bantuan memilih Tingkat Kerusakan */}
                            <div class="dropdown dropdown-right">
                                <label tabindex="0" class="btn btn-circle btn-ghost btn-xs text-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </label>
                                <div tabindex="0" class="card compact dropdown-content shadow bg-base-100 rounded-box w-64">
                                    <div class="card-body">
                                        <h2 class="card-title">Tingkat Kerusakan</h2>
                                        <p>Ringan = Kerusakan kurang dari 20%</p>
                                        <p>Sedang = Kerusakan diantara 20%-50%</p>
                                        <p>Berat = Kerusakan lebih dari 50%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <select id="tingkat-kerusakan" className='rounded-xl py-1 text-black'>
                                <option value="ringan">Ringan</option>
                                <option value="sedang">Sedang</option>
                                <option value="berat">Berat</option>
                            </select>
                        </div>
                        Jumlah KK:
                        <div className="pt-1 pb-3">
                            <input type="number"
                                placeholder="Masukkan jumlah KK"
                                className="input input-bordered input-sm w-full max-w-xs" min='0' />
                        </div>
                        Jumlah Korban Anak:
                        <div className="pt-1 pb-3">
                            <input type="number"
                                placeholder="Masukkan jumlah Korban Anak"
                                className="input input-bordered input-sm w-full max-w-xs" min='0' />
                        </div>
                        Jumlah Korban Dewasa:
                        <div className="pt-1 pb-3">
                            <input type="number"
                                placeholder="Masukkan jumlah Korban Dewasa"
                                className="input input-bordered input-sm w-full max-w-xs" min='0' />
                        </div>
                        Jumlah Korban Lansia:
                        <div className="pt-1 pb-3">
                            <input type="number"
                                placeholder="Masukkan jumlah Korban Lansia"
                                className="input input-bordered input-sm w-full max-w-xs" min='0' />
                        </div>
                        Jumlah Luka Ringan:
                        <div className="pt-1 pb-3">
                            <input type="number"
                                placeholder="Masukkan jumlah Luka Ringan"
                                className="input input-bordered input-sm w-full max-w-xs" min='0' />
                        </div>
                        Jumlah Luka Berat:
                        <div className="pt-1 pb-3">
                            <input type="number"
                                placeholder="Masukkan jumlah Luka Berat"
                                className="input input-bordered input-sm w-full max-w-xs" min='0' />
                        </div>
                        Jumlah Meninggal:
                        <div className="pt-1 pb-3">
                            <input type="number"
                                placeholder="Masukkan jumlah Luka Meninggal"
                                className="input input-bordered input-sm w-full max-w-xs" min='0' />
                        </div>
                        <div className="py-4 text-center">
                            <input type="submit" value='Insert Data' className="btn btn-accent w-1/4" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InsertData