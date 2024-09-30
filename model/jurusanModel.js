const connectToDatabase = require('../databases/config');
const db = connectToDatabase(); // Membuat koneksi ke database

const getAllJurusanModel = (callback) => {
    const query = 'SELECT * FROM jurusan';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const getJurusanByIdModel = (id, callback) => {
    const query = 'SELECT * FROM jurusan WHERE id_jurusan = ?';
    db.query(query, id, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const createJurusanModel = (data, callback) => {
    const query = 'INSERT INTO jurusan SET ?';
    db.query(query, data, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const updateJurusanModel = (id, data, callback) => {
    const query = 'UPDATE jurusan SET ? WHERE id_jurusan = ?';
    db.query(query, [data, id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const deleteJurusanModel = (id, callback) => {
    const query = 'DELETE FROM jurusan WHERE id_jurusan = ?';
    db.query(query, id, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

module.exports = {
    getAllJurusanModel,
    getJurusanByIdModel,
    createJurusanModel,
    updateJurusanModel,
    deleteJurusanModel
}