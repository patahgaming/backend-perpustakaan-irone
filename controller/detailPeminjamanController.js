const detailPeminjamanModel = require('../model/detailPeminjamanModel');

const getAllDetailPeminjaman = (req, res) => {
    detailPeminjamanModel.getAllDetailPeminjamanModel((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const getDetailPeminjamanById = (req, res) => {
    const id = req.params.id;
    detailPeminjamanModel.getDetailPeminjamanByIdModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const createDetailPeminjaman = (req, res) => {
    const data = req.body;
    detailPeminjamanModel.createDetailPeminjamanModel(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const updateDetailPeminjaman = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    detailPeminjamanModel.updateDetailPeminjamanModel(id, data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const deleteDetailPeminjaman = (req, res) => {
    const id = req.params.id;
    detailPeminjamanModel.deleteDetailPeminjamanModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

module.exports = {
    getAllDetailPeminjaman,
    getDetailPeminjamanById,
    createDetailPeminjaman,
    updateDetailPeminjaman,
    deleteDetailPeminjaman
}
