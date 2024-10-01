Backend Perpustakaan 📚
Backend ini dibangun menggunakan Node.js dan MySQL untuk mendukung sistem perpustakaan digital. Fitur utama mencakup manajemen buku, pengguna, dan transaksi peminjaman.

Fitur Utama 🔑
CRUD (Create, Read, Update, Delete) Buku
CRUD Pengguna (Admin/Anggota Perpustakaan)
Manajemen Transaksi Peminjaman Buku
Sistem validasi database otomatis
Migrasi database otomatis saat server dijalankan
Teknologi yang Digunakan 🛠️
Node.js - Runtime environment untuk backend
Express - Web framework untuk Node.js
MySQL - Relational database management
dotenv - Manajemen environment variables
mysql2 - Koneksi ke MySQL
nodemon - Auto-restart server selama pengembangan
Cara Penggunaan 💻
Lakukan instalasi dengan:

bash
Salin kode
npm install
Edit file EXAMPLE.ENV, sesuaikan pengaturannya, lalu ubah namanya menjadi .env.

Jalankan server dengan:

bash
Salin kode
npm run dev
Pada saat pertama kali, mungkin akan terjadi error—itu wajar.

Lakukan migrasi database dengan menjalankan:

bash
Salin kode
npm run migrate
Ini akan menjalankan migrasi dan membuat database yang sesuai.
