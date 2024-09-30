const connectToDatabase = require('../databases/config');
const db = connectToDatabase(); // Membuat koneksi ke database

const getAllPengarangModel = (callback) => {
    const query = "SELECT * FROM pengarang";
    db.query(query, (err, results) => {
        if(err){
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const getPengarangByIdModel = (id, callback) => {
    const query = "SELECT * FROM pengarang WHERE id_pengarang = ?";
    db.query(query, id, (err, results) => {
        if(err){
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const createPengarangModel = (data, callback) => {
    const query = "INSERT INTO pengarang SET ?";
    db.query(query, data, (err, results) => {
        if(err){
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const updatePengarangModel = (id, data, callback) => {
    const query = "UPDATE pengarang SET ? WHERE id_pengarang = ?";
    db.query(query, [data, id], (err, results) => {
        if(err){
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

const deletePengarangModel = (id, callback) => {
    const query = "DELETE FROM pengarang WHERE id_pengarang = ?";
    db.query(query, id, (err, results) => {
        if(err){
            console.error('Error executing query:', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

module.exports = {
    getAllPengarangModel,
    getPengarangByIdModel,
    createPengarangModel,
    updatePengarangModel,
    deletePengarangModel
}