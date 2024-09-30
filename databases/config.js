const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();  // Load .env variables

// Nama database yang ingin dicek atau dibuat
const dbName = process.env.DB_NAME;
const WhoIs = process.env.WHOIS;

// Buat koneksi tanpa menyebutkan nama database untuk pengecekan awal
const connectionInternal = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

// Fungsi untuk mengecek dan membuat database jika tidak ada
async function checkAndCreateDatabase() {
  let isDatabaseCreated = false; // Flag untuk mengetahui apakah database dibuat atau tidak
  try {
    const checkDbQuery = `SHOW DATABASES LIKE '${dbName}'`;
    
    // Cek apakah database sudah ada
    const [results] = await connectionInternal.promise().query(checkDbQuery);
    
    if (results.length > 0) {
      console.log(`Database '${dbName}' sudah ada. ✅`);
    } else {
      console.log(`${WhoIs}, ancrit kalo mau nyalain, Databasennya buat dululah 😡🫵`);
      console.log(`Database '${dbName}' tidak ditemukan. Membuat database baru...`);
      
      const createDbQuery = `CREATE DATABASE \`${dbName}\``;
      await connectionInternal.promise().query(createDbQuery);
      
      console.log('Untung gua jago 😎');
      console.log(`Database '${dbName}' berhasil dibuat. 🎉`);
      console.log('Sekarang buat tabelnya dulu ya 😡🫵');
      
      const { createTables } = require('./migrate');
      await createTables(); // Pastikan untuk menunggu migrasi selesai
      isDatabaseCreated = true; // Tandai bahwa database telah dibuat
    }
  } catch (err) {
    console.error('Terjadi kesalahan:', err.message);
    console.log(`DATABASENYA NYALAIN DULU LAH ${WhoIs} 😡🫵 (Terus restart)`);
  } finally {
    connectionInternal.end(); // Tutup koneksi internal di akhir
  }
  return isDatabaseCreated; // Kembalikan flag
}

// Fungsi ini dipanggil setelah memastikan bahwa database sudah ada
function connectToDatabase() {
  const dbName = process.env.DB_NAME;

  // Buat koneksi ulang dengan database yang sudah ada
  const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: dbName
  });

  dbConnection.connect(err => {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      console.log('DATABASENYA JANGAN DIMATIIN 😡🫵');
      return;
    }
    console.log(`Connected to the '${dbName}' database. 🚀`);
  });

  // Ekspor koneksi agar bisa digunakan di file lain
  return dbConnection;
}

// Jalankan fungsi untuk cek dan buat database jika tidak ada
(async () => {
  await checkAndCreateDatabase();
  const dbConnection = connectToDatabase();
  module.exports = dbConnection; // Ekspor koneksi setelah berhasil terkoneksi
})();
module.exports = connectToDatabase;