const connectToDatabase = require('../databases/config');
const db = connectToDatabase(); // Membuat koneksi ke database

const getAllBukuModel = (callback) => {
    const query = 'SELECT * FROM buku';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}
const getBukuByIdModel = (id, callback) => {
    const query = 'SELECT * FROM buku WHERE id_buku = ?';
    db.query(query, id, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}
const createBukuModel = (bukuData, callback) => {
    const { judul_buku, th_terbit, nama_pengarang, total_buku, nama_lokasi, nama_kategori, kode_buku, gambar, nama_penerbit } = bukuData;

    const query = `
    INSERT INTO buku (judul_buku, th_terbit, id_pengarang, total_buku, id_lokasi, id_kategori, kode_buku, gambar, id_penerbit) 
    VALUES (?, ?, 
        (SELECT id_pengarang FROM pengarang WHERE nama_pengarang = ?), 
        ?, 
        (SELECT id_lokasi FROM lokasibuku WHERE nama_lokasi = ?), 
        (SELECT id_kategori FROM kategoribuku WHERE nama_kategori = ?), 
        ?, ?, 
        (SELECT id_penerbit FROM penerbit WHERE nama_penerbit = ?))`;

    const values = [
        judul_buku, th_terbit, nama_pengarang, total_buku, 
        nama_lokasi, nama_kategori, kode_buku, gambar, nama_penerbit
    ];

    db.query(query, values, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
};

const updateBukuModel = (id, data, callback) => {
    const query = 'UPDATE buku SET ? WHERE id_buku = ?';
    db.query(query, [data, id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}
const deleteBukuModel = (id, callback) => {
    const query = 'DELETE FROM buku WHERE id_buku = ?';
    db.query(query, id, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}
module.exports = {
    getAllBukuModel,
    getBukuByIdModel,
    createBukuModel,
    updateBukuModel,
    deleteBukuModel
}
