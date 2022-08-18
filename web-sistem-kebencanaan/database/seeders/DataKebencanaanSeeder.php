<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DataKebencanaanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        DB::table('sikdeliserdangs')->insert([
            'tanggal' => '2022-07-06',
            'waktu' => '08:17:11',
            'jenis_bencana' => 'Banjir',
            'kecamatan' => 'Percut Sei Tuan',
            'desa_kelurahan' => 'Desa Bandar Klippa',
            'dusun_lingkungan' => 'DUSUN X',
            'alamat' => 'Jl. Tungsten no. 6',
            'fasilitas' => 'Rumah Tempat Tinggal',
            'tingkat_kerusakan' => 'Ringan',
            'jumlah_kk' => 1,
            'jumlah_korban' => 2,
            'jumlah_korban_anak' => 2,
            'jumlah_korban_dewasa' => 2,
            'jumlah_korban_lansia' => 0,
            'jumlah_lukaringan' => 2,
            'jumlah_lukaberat' => 0,
            'jumlah_meninggal' => 0,
            'userid_inputter' => 'Y01',
            'keterangan_fasilitas' => 'Rumah pak Tesla',
            'id_data' => 1
        ]);

    }
}
