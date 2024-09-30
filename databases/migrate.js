const connectToDatabase = require('./config');
const db = connectToDatabase();
const dotenv = require('dotenv');

dotenv.config();  // Load .env variables

const createTableBuku = `
CREATE TABLE IF NOT EXISTS buku (
  id_buku INT NOT NULL AUTO_INCREMENT,
  judul_buku VARCHAR(255) NOT NULL,
  th_terbit YEAR NOT NULL,
  id_pengarang INT NOT NULL,
  total_buku INT NOT NULL,
  id_lokasi INT NOT NULL,
  id_kategori INT NOT NULL,
  kode_buku VARCHAR(100) NOT NULL UNIQUE,
  gambar VARCHAR(255) DEFAULT NULL,
  id_penerbit INT NOT NULL,
  PRIMARY KEY (id_buku),
  FOREIGN KEY (id_pengarang) REFERENCES pengarang(id_pengarang),
  FOREIGN KEY (id_lokasi) REFERENCES lokasibuku(id_lokasi),
  FOREIGN KEY (id_kategori) REFERENCES kategoribuku(id_kategori),
  FOREIGN KEY (id_penerbit) REFERENCES penerbit(id_penerbit)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;

const createTableDetailPeminjaman = `
CREATE TABLE IF NOT EXISTS detailpeminjaman (
  id_detail INT NOT NULL AUTO_INCREMENT,
  id_peminjaman INT NOT NULL,
  id_buku INT NOT NULL,
  jumlah INT NOT NULL,
  PRIMARY KEY (id_detail),
  FOREIGN KEY (id_peminjaman) REFERENCES peminjaman(id_peminjaman),
  FOREIGN KEY (id_buku) REFERENCES buku(id_buku)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;

const createTableJabatan = `
CREATE TABLE IF NOT EXISTS jabatan (
  id_jabatan INT NOT NULL AUTO_INCREMENT,
  nama_jabatan VARCHAR(100) NOT NULL,
  PRIMARY KEY (id_jabatan)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;

const createTableJurusan = `
CREATE TABLE IF NOT EXISTS jurusan (
  id_jurusan INT NOT NULL AUTO_INCREMENT,
  nama_jurusan VARCHAR(100) NOT NULL,
  PRIMARY KEY (id_jurusan)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;

const createTableKaryawan = `
CREATE TABLE IF NOT EXISTS karyawan (
  id_karyawan INT NOT NULL AUTO_INCREMENT,
  nama_karyawan VARCHAR(255) NOT NULL,
  id_jabatan INT NOT NULL,
  id_status INT NOT NULL,
  jenis_kelamin ENUM('L','P') NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_karyawan),
  FOREIGN KEY (id_jabatan) REFERENCES jabatan(id_jabatan),
  FOREIGN KEY (id_status) REFERENCES status(id_status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;

const createTableKategoriBuku = `
CREATE TABLE IF NOT EXISTS kategoribuku (
  id_kategori INT NOT NULL AUTO_INCREMENT,
  nama_kategori VARCHAR(100) NOT NULL,
  PRIMARY KEY (id_kategori)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;

const createTableKelas = `
CREATE TABLE IF NOT EXISTS kelas (
  id_kelas INT NOT NULL AUTO_INCREMENT,
  nama_kelas VARCHAR(50) NOT NULL,
  PRIMARY KEY (id_kelas)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;

const createTableLokasiBuku = `
CREATE TABLE IF NOT EXISTS lokasibuku (
  id_lokasi INT NOT NULL AUTO_INCREMENT,
  nama_lokasi VARCHAR(100) NOT NULL,
  PRIMARY KEY (id_lokasi)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;

const createTablePeminjaman = `
CREATE TABLE IF NOT EXISTS peminjaman (
  id_peminjaman INT NOT NULL AUTO_INCREMENT,
  id_siswa INT NOT NULL,
  id_karyawan INT NOT NULL,
  tanggal_pinjam DATE NOT NULL,
  tanggal_kembali DATE DEFAULT NULL,
  status_peminjaman ENUM('dipinjam','dikembalikan') NOT NULL,
  PRIMARY KEY (id_peminjaman),
  FOREIGN KEY (id_siswa) REFERENCES siswa(id_siswa),
  FOREIGN KEY (id_karyawan) REFERENCES karyawan(id_karyawan)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;

const createTablePenerbit = `
CREATE TABLE IF NOT EXISTS penerbit (
  id_penerbit INT NOT NULL AUTO_INCREMENT,
  nama_penerbit VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_penerbit)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;

const createTablePengarang = `
CREATE TABLE IF NOT EXISTS pengarang (
  id_pengarang INT NOT NULL AUTO_INCREMENT,
  nama_pengarang VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_pengarang)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;

const createTableSiswa = `
CREATE TABLE IF NOT EXISTS siswa (
  id_siswa INT NOT NULL AUTO_INCREMENT,
  nis VARCHAR(20) NOT NULL UNIQUE,
  nama_siswa VARCHAR(255) NOT NULL,
  jenis_kelamin ENUM('L','P') NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  alamat TEXT NOT NULL,
  id_kelas INT NOT NULL,
  id_jurusan INT NOT NULL,
  id_status INT NOT NULL,
  PRIMARY KEY (id_siswa),
  FOREIGN KEY (id_kelas) REFERENCES kelas(id_kelas),
  FOREIGN KEY (id_jurusan) REFERENCES jurusan(id_jurusan),
  FOREIGN KEY (id_status) REFERENCES status(id_status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;

const createTableStatus = `
CREATE TABLE IF NOT EXISTS status (
  id_status INT NOT NULL AUTO_INCREMENT,
  nama_status VARCHAR(50) NOT NULL,
  PRIMARY KEY (id_status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;


const createTableQueries = [
  createTableJabatan,
  createTableStatus,
  createTableJurusan,
  createTableKelas,
  createTableKategoriBuku,
  createTableLokasiBuku,
  createTablePenerbit,
  createTablePengarang,
  createTableSiswa,
  createTableKaryawan,
  createTableBuku,
  createTablePeminjaman,
  createTableDetailPeminjaman,
];



function createTables(db) { // Menerima koneksi db sebagai parameter
  if (!db || !Array.isArray(createTableQueries)) {
    console.error('Invalid database connection or queries array.');
    return Promise.reject('Invalid parameters');
  }

  const promises = createTableQueries.map((query, index) => {
      return new Promise((resolve, reject) => {
          console.log(`Executing query ${index + 1}: ${query}`);
          db.query(query, (err, results) => {
              if (err) {
                  reject('Failed to create table: ' + err.message);
              } else {
                  console.log('Table created successfully.');
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
createTables(db);

// Ekspor fungsi createTables untuk digunakan di modul lain
module.exports = {   createTables,
  createTableQueries
 };
