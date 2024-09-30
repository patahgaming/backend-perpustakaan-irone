const connectToDatabase = require('../databases/config');
const db = connectToDatabase(); // Membuat koneksi ke database

const getAllPeminjamanModel = (callback) => {
    const query = "SELECT * FROM peminjaman";
    db.query(query, (err, results) => {
        if(err){
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const getPeminjamanByIdModel = (id, callback) => {
    const query = "SELECT * FROM peminjaman WHERE id_peminjaman = ?";
    db.query(query, id, (err, results) => {
        if(err){
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const createPeminjamanModel = (data, callback) => {
    const query = "INSERT INTO peminjaman SET ?";
    db.query(query, data, (err, results) => {
        if(err){
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const updatePeminjamanModel = (id, data, callback) => {
    const query = "UPDATE peminjaman SET ? WHERE id_peminjaman = ?";
    db.query(query, [data, id], (err, results) => {
        if(err){
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const deletePeminjamanModel = (id, callback) => {
    const query = "DELETE FROM peminjaman WHERE id_peminjaman = ?";
    db.query(query, id, (err, results) => {
        if(err){
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

module.exports = {
    getAllPeminjamanModel,
    getPeminjamanByIdModel,
    createPeminjamanModel,
    updatePeminjamanModel,
    deletePeminjamanModel
}