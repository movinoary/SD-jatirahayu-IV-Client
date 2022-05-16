import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as Page from '../pages/index'

// CSS
import '../style/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page.Home />} />
        <Route path='profil' element={<Page.Profil />}>
          <Route path='guru' element={<Page.ProfilGuru />} />
          <Route path='galeri' element={<Page.ProfilGaleri />} />
          <Route path='anggaran' element={<Page.ProfilAnggaran />} />
        </Route>
        <Route path='video' element={<Page.Video />} />
        <Route path='berita' element={<Page.Berita />} />
        <Route path='berita/isi' element={<Page.BeritaIsi />} />
        <Route path='login' element={<Page.Login />} />
        <Route path='dashboard' element={<Page.Dashboard />}>
          <Route path='anggaran' element={<Page.DatabseAnggaranGet />} />
          <Route path='silabus' element={<Page.PerangkatPembalejaranSilabus />} />
          <Route path='kkm' element={<Page.PerangkatPembelajaranKKM />} />
          <Route path='prota' element={<Page.PerangkatPembelajaranProta />} />
          <Route path='promes' element={<Page.PerangkatPembelajaranPromes />} />
          <Route path='rpp' element={<Page.PerangkatPembelajaranRPP />} />
          <Route path='ulangan-harian' element={<Page.DaftarNilaiUlanganHarian />} />
          <Route path='pekan-ulangan' element={<Page.DaftarNilaiPekanUlangan />} />
          <Route path='penilaian-tengah-semester' element={<Page.DaftarNilaiPenilaianTengahSemester />} />
          <Route path='penilaian-akhir-semester' element={<Page.DaftarNilaiPenilaianAkhirSemester />} />
          <Route path='penilaian-akhir-tahun' element={<Page.DaftarNilaiPenilaianAkhirTahun />} />
          <Route path='bank-soal-pendidikan-agama' element={<Page.BankSoalPendidikanAgama />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
