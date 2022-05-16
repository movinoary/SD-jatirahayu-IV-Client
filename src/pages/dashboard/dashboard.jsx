import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import * as Components from '../../components/index'
import * as Page from '../index'

const Dashboard = () => {
    const [click, setClick] = useState (false);

    function handleClick(){
        setClick(!click);
    };

  return (
    <>
    <nav className='nav-dashboard'>
        <div className='nav-dash-title'>
        <div className='nav-title'>
            <i className={click ?'fas fa-bars' : "fas fa-arrow-alt-circle-left"  } onClick={handleClick}/>
            <Link to='/dashboard' className='nav-link'>
                <h3>SDN <span> Jatirahayu  </span> IV</h3>  
            </Link>
        </div>
        <div className='nav-title'>
            <h3>Akun <span>vino</span></h3>
            <button  className='button-keluar'>keluar</button>
        </div>
        </div>
    </nav>
    <div className='dashboard-row'>
        <div className={click ?  "nav-hide" : 'nav-dash-menu' }>
            {Components.DataNav.map((item, index) => {
                return <Components.SubNav item={item} key={index} />;
            })}
        </div>
        <div className='dashboard-isi'>
            <Routes>
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
            </Routes>
        </div>
    </div>
    </>
  )
}

export default Dashboard