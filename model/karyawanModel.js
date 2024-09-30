const connectToDatabase = require('../databases/config');
const db = connectToDatabase(); // Membuat koneksi ke database

const getAllKaryawanModel = (callback) => {
    const query = 'SELECT * FROM karyawan';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const getKaryawanByIdModel = (id, callback) => {
    const query = 'SELECT * FROM karyawan WHERE id_karyawan = ?';
    db.query(query, id, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const createKaryawanModel = (data, callback) => {
    const query = 'INSERT INTO karyawan SET ?';
    db.query(query, data, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const updateKaryawanModel = (id, data, callback) => {
    const query = 'UPDATE karyawan SET ? WHERE id_karyawan = ?';
    db.query(query, [data, id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const deleteKaryawanModel = (id, callback) => {
    const query = 'DELETE FROM karyawan WHERE id_karyawan = ?';
    db.query(query, id, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}
module.exports = {
    getAllKaryawanModel,
    getKaryawanByIdModel,
    createKaryawanModel,
    updateKaryawanModel,
    deleteKaryawanModel
}