<?php

namespace App\Http\Controllers;

use App\Models\sikdeliserdang;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SikdeliserdangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dataBencana = sikdeliserdang::all();
        return Inertia::render('Homepage', [
            'title' => 'Web Sistem Kebencanaan Deli Serdang',
            'description' => 'Selamat Datang di Sistem Informasi Kebencanaan Deli Serdang',
            'databencana' => $dataBencana,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\sikdeliserdang  $sikdeliserdang
     * @return \Illuminate\Http\Response
     */
    public function show(sikdeliserdang $sikdeliserdang)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\sikdeliserdang  $sikdeliserdang
     * @return \Illuminate\Http\Response
     */
    public function edit(sikdeliserdang $sikdeliserdang)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\sikdeliserdang  $sikdeliserdang
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, sikdeliserdang $sikdeliserdang)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\sikdeliserdang  $sikdeliserdang
     * @return \Illuminate\Http\Response
     */
    public function destroy(sikdeliserdang $sikdeliserdang)
    {
        //
    }
}
