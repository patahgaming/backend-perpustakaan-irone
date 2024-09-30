const kategoriBukuModel = require('../model/kategoriBukuModel');

const getAllKategoriBuku = (req, res) => {
    kategoriBukuModel.getAllKategoriBukuModel((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const getKategoriBukuById = (req, res) => {
    const id = req.params.id;
    kategoriBukuModel.getKategoriBukuByIdModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const createKategoriBuku = (req, res) => {
    const data = req.body;
    kategoriBukuModel.createKategoriBukuModel(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const updateKategoriBuku = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    kategoriBukuModel.updateKategoriBukuModel(id, data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const deleteKategoriBuku = (req, res) => {
    const id = req.params.id;
    kategoriBukuModel.deleteKategoriBukuModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

module.exports = {
    getAllKategoriBuku,
    getKategoriBukuById,
    createKategoriBuku,
    updateKategoriBuku,
    deleteKategoriBuku
}
