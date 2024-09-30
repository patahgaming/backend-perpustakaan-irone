const connectToDatabase = require('../databases/config');
const db = connectToDatabase(); // Membuat koneksi ke database

const getAllDetailPeminjamanModel = (callback) => {
    const query = 'SELECT * FROM detailpeminjaman';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const getDetailPeminjamanByIdModel = (id, callback) => {
    const query = 'SELECT * FROM detailpeminjaman WHERE id_detailpeminjaman = ?';
    db.query(query, id, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const createDetailPeminjamanModel = (data, callback) => {
    const query = 'INSERT INTO detailpeminjaman SET ?';
    db.query(query, data, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const updateDetailPeminjamanModel = (id, data, callback) => {
    const query = 'UPDATE detailpeminjaman SET ? WHERE id_detailpeminjaman = ?';
    db.query(query, [data, id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const deleteDetailPeminjamanModel = (id, callback) => {
    const query = 'DELETE FROM detailpeminjaman WHERE id_detailpeminjaman = ?';
    db.query(query, id, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

module.exports = {
    getAllDetailPeminjamanModel,
    getDetailPeminjamanByIdModel,
    createDetailPeminjamanModel,
    updateDetailPeminjamanModel,
    deleteDetailPeminjamanModel
}
