const peminjamanModel = require('../model/peminjamanModel');

const getAllPeminjaman = (req, res) => {
    peminjamanModel.getAllPeminjamanModel((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const getPeminjamanById = (req, res) => {
    const id = req.params.id;
    peminjamanModel.getPeminjamanByIdModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const createPeminjaman = (req, res) => {
    const data = req.body;
    peminjamanModel.createPeminjamanModel(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const updatePeminjaman = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    peminjamanModel.updatePeminjamanModel(id, data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const deletePeminjaman = (req, res) => {
    const id = req.params.id;
    peminjamanModel.deletePeminjamanModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

module.exports = {
    getAllPeminjaman,
    getPeminjamanById,
    createPeminjaman,
    updatePeminjaman,
    deletePeminjaman
}
