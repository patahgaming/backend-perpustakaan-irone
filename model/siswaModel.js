const connectToDatabase = require('../databases/config');
const db = connectToDatabase(); // Membuat koneksi ke database

const getAllSiswaModel = (callback) => {
    const query = 'SELECT * FROM siswa';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const getSiswaByIdModel = (id, callback) => {
    const query = 'SELECT * FROM siswa WHERE id_siswa = ?';
    db.query(query, id, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const createSiswaModel = (data, callback) => {
    const query = 'INSERT INTO siswa SET ?';
    db.query(query, data, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const updateSiswaModel = (id, data, callback) => {
    const query = 'UPDATE siswa SET ? WHERE id_siswa = ?';
    db.query(query, [data, id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const deleteSiswaModel = (id, callback) => {
    const query = 'DELETE FROM siswa WHERE id_siswa = ?';
    db.query(query, id, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

module.exports = {
    getAllSiswaModel,
    getSiswaByIdModel,
    createSiswaModel,
    updateSiswaModel,
    deleteSiswaModel
}