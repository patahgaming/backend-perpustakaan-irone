const connectToDatabase = require('../databases/config');
const db = connectToDatabase(); // Membuat koneksi ke database

const getAllLokasiBukuModel = (callback) => {
    const query = "SELECT * FROM lokasibuku";
    db.query(query, (err, results) => {
        if(err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

const getLokasiBukuByIdModel = (id, callback) => {
    const query = "SELECT * FROM lokasibuku WHERE id_lokasi = ?";
    db.query(query, id, (err, results) => {
        if(err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const createLokasiBukuModel = (data, callback) => {
    const query = "INSERT INTO lokasibuku SET ?";
    db.query(query, data, (err, results) => {
        if(err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const updateLokasiBukuModel = (id, data, callback) => {
    const query = "UPDATE lokasibuku SET ? WHERE id_lokasi = ?";
    db.query(query, [data, id], (err, results) => {
        if(err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const deleteLokasiBukuModel = (id, callback) => {
    const query = "DELETE FROM lokasibuku WHERE id_lokasi = ?";
    db.query(query, id, (err, results) => {
        if(err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

module.exports = {
    getAllLokasiBukuModel,
    getLokasiBukuByIdModel,
    createLokasiBukuModel,
    updateLokasiBukuModel,
    deleteLokasiBukuModel
}