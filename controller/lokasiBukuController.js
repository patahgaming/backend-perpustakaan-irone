const lokasiBukuModel = require('../model/lokasiBukuModel');

const getAllLokasiBuku = (req, res) => {
    lokasiBukuModel.getAllLokasiBukuModel((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const getLokasiBukuById = (req, res) => {
    const id = req.params.id;
    lokasiBukuModel.getLokasiBukuByIdModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const createLokasiBuku = (req, res) => {
    const data = req.body;
    lokasiBukuModel.createLokasiBukuModel(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const updateLokasiBuku = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    lokasiBukuModel.updateLokasiBukuModel(id, data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const deleteLokasiBuku = (req, res) => {
    const id = req.params.id;
    lokasiBukuModel.deleteLokasiBukuModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

module.exports = {
    getAllLokasiBuku,
    getLokasiBukuById,
    createLokasiBuku,
    updateLokasiBuku,
    deleteLokasiBuku
}
