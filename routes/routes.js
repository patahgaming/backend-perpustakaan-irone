const express = require('express');
const router = express.Router();
const bukuController = require('../controller/bukuController');
const detailPeminjamanController = require('../controller/detailPeminjamanController');
const jabatanController = require('../controller/jabatanController');
const jurusanController = require('../controller/jurusanController');
const kategoriBukuController = require('../controller/kategoriBukuController');
const kelasController = require('../controller/kelasController');
const lokasiBukuController = require('../controller/lokasiBukuController');
const peminjamanController = require('../controller/peminjamanController');
const penerbitController = require('../controller/penerbitController');
const pengarangController = require('../controller/pengarangController');
const karyawanController = require('../controller/karyawanController');
const siswaController = require('../controller/siswaController');

// Rute CRUD untuk tabel buku
router.get('/buku', bukuController.getAllBuku);
router.get('/buku/:id', bukuController.getBukuById);
router.post('/buku', bukuController.createBuku);
router.put('/buku/:id', bukuController.updateBuku);
router.delete('/buku/:id', bukuController.deleteBuku);

// // Rute CRUD untuk tabel detailpeminjaman
// router.get('/detailpeminjaman', detailPeminjamanController.getAllDetailPeminjaman);
// router.get('/detailpeminjaman/:id', detailPeminjamanController.getDetailPeminjamanById);
// router.post('/detailpeminjaman', detailPeminjamanController.createDetailPeminjaman);
// router.put('/detailpeminjaman/:id', detailPeminjamanController.updateDetailPeminjaman);
// router.delete('/detailpeminjaman/:id', detailPeminjamanController.deleteDetailPeminjaman);

// // Rute CRUD untuk tabel jabatan
// router.get('/jabatan', jabatanController.getAllJabatan);
// router.get('/jabatan/:id', jabatanController.getJabatanById);
// router.post('/jabatan', jabatanController.createJabatan);
// router.put('/jabatan/:id', jabatanController.updateJabatan);
// router.delete('/jabatan/:id', jabatanController.deleteJabatan);

// // Rute CRUD untuk tabel jabatan
// router.get('/jabatan', jabatanController.getAllJabatan);
// router.get('/jabatan/:id', jabatanController.getJabatanById);
// router.post('/jabatan', jabatanController.createJabatan);
// router.put('/jabatan/:id', jabatanController.updateJabatan);
// router.delete('/jabatan/:id', jabatanController.deleteJabatan);

// Rute CRUD untuk tabel jurusan
// router.get('/jurusan', jurusanController.getAllJurusan);
// router.get('/jurusan/:id', jurusanController.getJurusanById);
// router.post('/jurusan', jurusanController.createJurusan);
// router.put('/jurusan/:id', jurusanController.updateJurusan);
// router.delete('/jurusan/:id', jurusanController.deleteJurusan);

// // Rute CRUD untuk tabel kategoribuku
// router.get('/kategoribuku', kategoriBukuController.getAllKategoriBuku);
// router.get('/kategoribuku/:id', kategoriBukuController.getKategoriBukuById);
// router.post('/kategoribuku', kategoriBukuController.createKategoriBuku);
// router.put('/kategoribuku/:id', kategoriBukuController.updateKategoriBuku);
// router.delete('/kategoribuku/:id', kategoriBukuController.deleteKategoriBuku);

// // Rute CRUD untuk tabel kelas
// router.get('/kelas', kelasController.getAllKelas);
// router.get('/kelas/:id', kelasController.getKelasById);
// router.post('/kelas', kelasController.createKelas);
// router.put('/kelas/:id', kelasController.updateKelas);
// router.delete('/kelas/:id', kelasController.deleteKelas);

// // Rute CRUD untuk tabel lokasibuku
// router.get('/lokasibuku', lokasiBukuController.getAllLokasiBuku);
// router.get('/lokasibuku/:id', lokasiBukuController.getLokasiBukuById);
// router.post('/lokasibuku', lokasiBukuController.createLokasiBuku);
// router.put('/lokasibuku/:id', lokasiBukuController.updateLokasiBuku);
// router.delete('/lokasibuku/:id', lokasiBukuController.deleteLokasiBuku);

// // Rute CRUD untuk tabel peminjaman
// router.get('/peminjaman', peminjamanController.getAllPeminjaman);
// router.get('/peminjaman/:id', peminjamanController.getPeminjamanById);
// router.post('/peminjaman', peminjamanController.createPeminjaman);
// router.put('/peminjaman/:id', peminjamanController.updatePeminjaman);
// router.delete('/peminjaman/:id', peminjamanController.deletePeminjaman);

// // Rute CRUD untuk tabel penerbit
// router.get('/penerbit', penerbitController.getAllPenerbit);
// router.get('/penerbit/:id', penerbitController.getPenerbitById);
// router.post('/penerbit', penerbitController.createPenerbit);
// router.put('/penerbit/:id', penerbitController.updatePenerbit);
// router.delete('/penerbit/:id', penerbitController.deletePenerbit);

// // Rute CRUD untuk tabel pengarang
// router.get('/pengarang', pengarangController.getAllPengarang);
// router.get('/pengarang/:id', pengarangController.getPengarangById);
// router.post('/pengarang', pengarangController.createPengarang);
// router.put('/pengarang/:id', pengarangController.updatePengarang);
// router.delete('/pengarang/:id', pengarangController.deletePengarang);

// // Rute CRUD untuk tabel karyawan
// router.get('/karyawan', karyawanController.getAllKaryawan);
// router.get('/karyawan/:id', karyawanController.getKaryawanById);
// router.post('/karyawan', karyawanController.createKaryawan);
// router.put('/karyawan/:id', karyawanController.updateKaryawan);
// router.delete('/karyawan/:id', karyawanController.deleteKaryawan);

// // Rute CRUD untuk tabel siswa
// router.get('/siswa', siswaController.getAllSiswa);
// router.get('/siswa/:id', siswaController.getSiswaById);
// router.post('/siswa', siswaController.createSiswa);
// router.put('/siswa/:id', siswaController.updateSiswa);
// router.delete('/siswa/:id', siswaController.deleteSiswa);



// Export router
module.exports = router;