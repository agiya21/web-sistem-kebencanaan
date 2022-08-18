<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sikdeliserdangs', function (Blueprint $table) {
            $table->date('tanggal');
            $table->string('waktu');
            $table->string('jenis_bencana');
            $table->string('kecamatan');
            $table->string('desa_kelurahan');
            $table->string('dusun_lingkungan');
            $table->string('alamat');
            $table->string('fasilitas');
            $table->string('tingkat_kerusakan');
            $table->integer('jumlah_kk');
            $table->integer('jumlah_korban');
            $table->integer('jumlah_korban_anak');
            $table->integer('jumlah_korban_dewasa');
            $table->integer('jumlah_korban_lansia');
            $table->integer('jumlah_lukaringan');
            $table->integer('jumlah_lukaberat');
            $table->integer('jumlah_meninggal');
            $table->string('userid_inputter');
            $table->string('keterangan_fasilitas');
            $table->bigInteger('id_data',true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sikdeliserdangs');
    }
};
