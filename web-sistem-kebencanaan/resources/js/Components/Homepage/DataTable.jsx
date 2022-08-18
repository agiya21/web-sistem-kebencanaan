import React from 'react'

const DataTable = (props) => {
    console.log('databencana', props.databencana)
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Tanggal</th>
                        <th>Waktu</th>
                        <th>Jenis Bencana</th>
                        <th>Kecamatan</th>
                        <th>Desa Kelurahan</th>
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
                            </tr>
                        )
                    }) : null}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Tanggal</th>
                        <th>Waktu</th>
                        <th>Jenis Bencana</th>
                        <th>Kecamatan</th>
                        <th>Desa Kelurahan</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default DataTable