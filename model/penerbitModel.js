const connectToDatabase = require('../databases/config');
const db = connectToDatabase(); // Membuat koneksi ke database

const getAllPenerbitModel = (callback) => {
    const query = 'SELECT * FROM penerbit';
    db.query(query, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

const getPenerbitByIdModel = (id, callback) => {
    const query = 'SELECT * FROM penerbit WHERE id_penerbit = ?';
    db.query(query, id, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

const createPenerbitModel = (data, callback) => {
    const query = 'INSERT INTO penerbit SET ?';
    db.query(query, data, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

const updatePenerbitModel = (id, data, callback) => {
    const query = 'UPDATE penerbit SET ? WHERE id_penerbit = ?';
    db.query(query, [data, id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const deletePenerbitModel = (id, callback) => {
    const query = 'DELETE FROM penerbit WHERE id_penerbit = ?';
    db.query(query, id, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

module.exports = {
    getAllPenerbitModel,
    getPenerbitByIdModel,
    createPenerbitModel,
    updatePenerbitModel,
    deletePenerbitModel
}