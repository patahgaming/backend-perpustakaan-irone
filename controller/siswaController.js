const siswaModel = require('../model/siswaModel');

const getAllSiswa = (req, res) => {
    siswaModel.getAllSiswaModel((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const getSiswaById = (req, res) => {
    const id = req.params.id;
    siswaModel.getSiswaByIdModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const createSiswa = (req, res) => {
    const data = req.body;
    siswaModel.createSiswaModel(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const updateSiswa = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    siswaModel.updateSiswaModel(id, data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const deleteSiswa = (req, res) => {
    const id = req.params.id;
    siswaModel.deleteSiswaModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

module.exports = {
    getAllSiswa,
    getSiswaById,
    createSiswa,
    updateSiswa,
    deleteSiswa
}
