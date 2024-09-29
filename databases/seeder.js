const connectToDatabase = require('./config');
const db = connectToDatabase();
const dotenv = require('dotenv');

dotenv.config();  // Load .env variables

const statuss = "INSERT INTO status (nama_status) VALUES ('Aktif'), ('Tidak Aktif');";

const jabatan = "INSERT INTO jabatan (nama_jabatan) VALUES ('Pustakawan'), ('Admin');";

const jurusan = "INSERT INTO jurusan (nama_jurusan) VALUES ('RPL'), ('TKJ');";

const kelas = "INSERT INTO kelas (nama_kelas) VALUES ('XI RPL 1'), ('XI TKJ 1');";

const pengarang = "INSERT INTO pengarang (nama_pengarang) VALUES ('Tere Liye'), ('Andrea Hirata');";

const penerbit = "INSERT INTO penerbit (nama_penerbit) VALUES ('Gramedia'), ('Erlangga');";

const lokasibuku = "INSERT INTO lokasibuku (nama_lokasi) VALUES ('Rak A1'), ('Rak B2');";

const kategoribuku = "INSERT INTO kategoribuku (nama_kategori) VALUES ('Fiksi'), ('Non-Fiksi');";

const siswa = "INSERT INTO siswa (nis, nama_siswa, jenis_kelamin, email, password, alamat, id_kelas, id_jurusan, id_status) VALUES ('12345', 'Yanas Prabu Aliif', 'L', 'yanas@example.com', 'password123', 'Jl. Merdeka', 1, 1, 1), ('67890', 'Bayu Indra', 'L', 'bayu@example.com', 'password456', 'Jl. Sudirman', 2, 2, 1);";

const karyawan = "INSERT INTO karyawan (nama_karyawan, id_jabatan, id_status, jenis_kelamin, email, password) VALUES ('Asep Rahmat', 1, 1, 'L', 'asep@example.com', 'password789'), ('Siti Fatimah', 2, 1, 'P', 'siti@example.com', 'password012');";

const buku = "INSERT INTO buku (judul_buku, th_terbit, id_pengarang, total_buku, id_lokasi, id_kategori, kode_buku, gambar, id_penerbit) VALUES ('Bumi', 2014, 1, 10, 1, 1, 'B001', NULL, 1), ('Laskar Pelangi', 2005, 2, 8, 2, 2, 'B002', NULL, 2);";

const peminjaman = "INSERT INTO peminjaman (id_siswa, id_karyawan, tanggal_pinjam, tanggal_kembali, status_peminjaman) VALUES (1, 1, '2024-09-24', NULL, 'dipinjam'), (2, 2, '2024-09-20', '2024-09-23', 'dikembalikan');";

const detailpeminjaman = "INSERT INTO detailpeminjaman (id_peminjaman, id_buku, jumlah) VALUES (1, 1, 1), (2, 2, 1);";

const seeders = [
    statuss,
    jabatan,
    jurusan,
    kelas,
    pengarang,
    penerbit,
    lokasibuku,
    kategoribuku,
    siswa,
    karyawan,
    buku,
    peminjaman,
    detailpeminjaman
];

function createMigrate(db) { // Menerima koneksi db sebagai parameter
    if (!db || !Array.isArray(seeders)) {
      console.error('Invalid database connection or queries array.');
      return Promise.reject('Invalid parameters');
    }
  
    const promises = seeders.map((query, index) => {
        return new Promise((resolve, reject) => {
            console.log(`Executing query ${index + 1}: ${query}`);
            db.query(query, (err, results) => {
                if (err) {
                    reject('Failed to migrate data: ' + err.message);
                } else {
                    console.log('Data migrated successfully.');
                    resolve();
                }
            });
        });
    });
  
    return Promise.all(promises)
        .then(() => console.log('All tables created successfully.'))
        .catch(err => console.error(err));
  }
  
  // Memanggil fungsi untuk membuat tabel
  createMigrate(db);
  