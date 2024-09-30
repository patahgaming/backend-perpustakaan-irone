const connectToDatabase = require('../databases/config');
const db = connectToDatabase(); // Membuat koneksi ke database

const getAllJabatanModel = (callback) => {
    const query = 'SELECT * FROM jabatan';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const getJabatanByIdModel = (id, callback) => {
    const query = 'SELECT * FROM jabatan WHERE id_jabatan = ?';
    db.query(query, id, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const createJabatanModel = (data, callback) => {
    const query = 'INSERT INTO jabatan SET ?';
    db.query(query, data, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const updateJabatanModel = (id, data, callback) => {
    const query = 'UPDATE jabatan SET ? WHERE id_jabatan = ?';
    db.query(query, [data, id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const deleteJabatanModel = (id, callback) => {
    const query = 'DELETE FROM jabatan WHERE id_jabatan = ?';
    db.query(query, id, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

module.exports = {
    getAllJabatanModel,
    getJabatanByIdModel,
    createJabatanModel,
    updateJabatanModel,
    deleteJabatanModel
}
