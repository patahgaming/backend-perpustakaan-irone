const kelasModel = require('../model/kelasModel');

const getAllKelas = (req, res) => {
    kelasModel.getAllKelasModel((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const getKelasById = (req, res) => {
    const id = req.params.id;
    kelasModel.getKelasByIdModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const createKelas = (req, res) => {
    const data = req.body;
    kelasModel.createKelasModel(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const updateKelas = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    kelasModel.updateKelasModel(id, data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const deleteKelas = (req, res) => {
    const id = req.params.id;
    kelasModel.deleteKelasModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

module.exports = {
    getAllKelas,
    getKelasById,
    createKelas,
    updateKelas,
    deleteKelas
}
