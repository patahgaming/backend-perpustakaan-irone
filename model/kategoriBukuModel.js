const connectToDatabase = require('../databases/config');
const db = connectToDatabase(); // Membuat koneksi ke database

const getAllKategoriBukuModel = (callback) => {
    const query = 'SELECT * FROM kategoribuku;';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
};

const getKategoriBukuByIdModel = (id, callback) => {
    const query = 'SELECT * FROM kategoribuku WHERE id_kategori = ?;';
    db.query(query, id, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
};

const createKategoriBukuModel = (data, callback) => {
    const query = 'INSERT INTO kategoribuku SET ?';
    db.query(query, data, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
};

const updateKategoriBukuModel = (id, data, callback) => {
    const query = 'UPDATE kategoribuku SET ? WHERE id_kategori = ?';
    db.query(query, [data, id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
};

const deleteKategoriBukuModel = (id, callback) => {
    const query = 'DELETE FROM kategoribuku WHERE id_kategori = ?';
    db.query(query, id, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
};

module.exports = { 
    getAllKategoriBukuModel,
    getKategoriBukuByIdModel,
    createKategoriBukuModel,
    updateKategoriBukuModel,
    deleteKategoriBukuModel
 }