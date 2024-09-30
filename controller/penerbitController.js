const penerbitModel = require('../model/penerbitModel');

const getAllPenerbit = (req, res) => {
    penerbitModel.getAllPenerbitModel((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const getPenerbitById = (req, res) => {
    const id = req.params.id;
    penerbitModel.getPenerbitByIdModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const createPenerbit = (req, res) => {
    const data = req.body;
    penerbitModel.createPenerbitModel(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const updatePenerbit = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    penerbitModel.updatePenerbitModel(id, data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const deletePenerbit = (req, res) => {
    const id = req.params.id;
    penerbitModel.deletePenerbitModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

module.exports = {
    getAllPenerbit,
    getPenerbitById,
    createPenerbit,
    updatePenerbit,
    deletePenerbit
}
