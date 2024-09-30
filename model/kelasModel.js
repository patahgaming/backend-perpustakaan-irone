const connectToDatabase = require('../databases/config');
const db = connectToDatabase(); // Membuat koneksi ke database

const getAllKelasModel = (callback) => {
    const query = 'SELECT * FROM kelas';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const getKelasByIdModel = (id, callback) => {
    const query = 'SELECT * FROM kelas WHERE id_kelas = ?';
    db.query(query, id, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const createKelasModel = (data, callback) => {
    const query = 'INSERT INTO kelas SET ?';
    db.query(query, data, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const updateKelasModel = (id, data, callback) => {
    const query = 'UPDATE kelas SET ? WHERE id_kelas = ?';
    db.query(query, [data, id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const deleteKelasModel = (id, callback) => {
    const query = 'DELETE FROM kelas WHERE id_kelas = ?';
    db.query(query, id, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

module.exports = {
    getAllKelasModel,
    getKelasByIdModel,
    createKelasModel,
    updateKelasModel,
    deleteKelasModel
}