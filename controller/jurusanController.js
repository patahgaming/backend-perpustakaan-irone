const jurusanModel = require('../model/jurusanModel');

const getAllJurusan = (req, res) => {
    jurusanModel.getAllJurusanModel((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const getJurusanById = (req, res) => {
    const id = req.params.id;
    jurusanModel.getJurusanByIdModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const createJurusan = (req, res) => {
    const data = req.body;
    jurusanModel.createJurusanModel(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const updateJurusan = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    jurusanModel.updateJurusanModel(id, data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const deleteJurusan = (req, res) => {
    const id = req.params.id;
    jurusanModel.deleteJurusanModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

module.exports = {
    getAllJurusan,
    getJurusanById,
    createJurusan,
    updateJurusan,
    deleteJurusan
}
