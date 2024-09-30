const karyawanModel = require('../model/karyawanModel');

const getAllKaryawan = (req, res) => {
    karyawanModel.getAllKaryawanModel((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const getKaryawanById = (req, res) => {
    const id = req.params.id;
    karyawanModel.getKaryawanByIdModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const createKaryawan = (req, res) => {
    const data = req.body;
    karyawanModel.createKaryawanModel(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const updateKaryawan = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    karyawanModel.updateKaryawanModel(id, data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const deleteKaryawan = (req, res) => {
    const id = req.params.id;
    karyawanModel.deleteKaryawanModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

module.exports = {
    getAllKaryawan,
    getKaryawanById,
    createKaryawan,
    updateKaryawan,
    deleteKaryawan
}
