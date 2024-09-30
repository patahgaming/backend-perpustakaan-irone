const pengarangModel = require('../model/pengarangModel');

const getAllPengarang = (req, res) => {
    pengarangModel.getAllPengarangModel((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const getPengarangById = (req, res) => {
    const id = req.params.id;
    pengarangModel.getPengarangByIdModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const createPengarang = (req, res) => {
    const data = req.body;
    pengarangModel.createPengarangModel(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const updatePengarang = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    pengarangModel.updatePengarangModel(id, data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const deletePengarang = (req, res) => {
    const id = req.params.id;
    pengarangModel.deletePengarangModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

module.exports = {
    getAllPengarang,
    getPengarangById,
    createPengarang,
    updatePengarang,
    deletePengarang
}
