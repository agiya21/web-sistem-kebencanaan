import React from 'react'

const DataTable = (props) => {
    console.log('databencana', props.databencana)
    return (
        <div className="overflow-x-auto rounded-box">
            <table className="table table-compact w-full text-center">
                <thead>
                <tr>
                        <th rowSpan='2'>Id</th>
                        <th rowSpan='2'>Tanggal</th>
                        <th rowSpan='2'>Waktu</th>
                        <th rowSpan='2'>Jenis Bencana</th>
                        <th rowSpan='2'>Kecamatan</th>
                        <th rowSpan='2'>Desa/Kelurahan</th>
                        <th rowSpan='2'>Dusun/Lingkungan</th>
                        <th rowSpan='2'>Alamat</th>
                        <th rowSpan='2'>Fasilitas</th>
                        <th rowSpan='2'>Keterangan Fasilitas</th>
                        <th rowSpan='2'>Tingkat Kerusakan</th>
                        <th rowSpan='2'>Jumlah KK</th>
                        <th colSpan='4' className='text-center'>Jumlah Korban</th>
                        <th rowSpan='2'>Luka Ringan</th>
                        <th rowSpan='2'>Luka Berat</th>
                        <th rowSpan='2'>Meninggal</th>
                        <th rowSpan='2'>Userid Inputter</th>
                    </tr>
                    <tr>
                        <th>Anak</th>
                        <th>Dewasa</th>
                        <th>Lansia</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {props.databencana ? props.databencana.map((item, i) => {
                        return (
                            <tr>
                                <td>{item.id_data}</td>
                                <td>{item.tanggal}</td>
                                <td>{item.waktu}</td>
                                <td>{item.jenis_bencana}</td>
                                <td>{item.kecamatan}</td>
                                <td>{item.desa_kelurahan}</td>
                                <td>{item.dusun_lingkungan}</td>
                                <td>{item.alamat}</td>
                                <td>{item.fasilitas}</td>
                                <td>{item.keterangan_fasilitas}</td>
                                <td>{item.tingkat_kerusakan}</td>
                                <td>{item.jumlah_kk}</td>
                                <td>{item.jumlah_korban_anak}</td>
                                <td>{item.jumlah_korban_dewasa}</td>
                                <td>{item.jumlah_korban_lansia}</td>
                                <td>{item.jumlah_korban}</td>
                                <td>{item.jumlah_lukaringan}</td>
                                <td>{item.jumlah_lukaberat}</td>
                                <td>{item.jumlah_meninggal}</td>
                                <td>{item.userid_inputter}</td>
                            </tr>
                        )
                    }) : null}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable