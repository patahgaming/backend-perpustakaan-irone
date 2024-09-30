const jabatanModel = require('../model/jabatanModel');

const getAllJabatan = (req, res) => {
    jabatanModel.getAllJabatanModel((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const getJabatanById = (req, res) => {
    const id = req.params.id;
    jabatanModel.getJabatanByIdModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const createJabatan = (req, res) => {
    const data = req.body;
    jabatanModel.createJabatanModel(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const updateJabatan = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    jabatanModel.updateJabatanModel(id, data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

const deleteJabatan = (req, res) => {
    const id = req.params.id;
    jabatanModel.deleteJabatanModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
}

module.exports = {
    getAllJabatan,
    getJabatanById,
    createJabatan,
    updateJabatan,
    deleteJabatan
}
