const bukuModel = require('../model/bukuModel');

const getAllBuku = (req, res) => {
    bukuModel.getAllBukuModel((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }});
}
const getBukuById = (req, res) => {
    const id = req.params.id;
    bukuModel.getBukuByIdModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }});
}
const createBuku = (req, res) => {
    const data = req.body;
    bukuModel.createBukuModel(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }});
}
const updateBuku = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    bukuModel.updateBukuModel(id, data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }});
}
const deleteBuku = (req, res) => {
    const id = req.params.id;
    bukuModel.deleteBukuModel(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }});
}
module.exports = {
    getAllBuku,
    getBukuById,
    createBuku,
    updateBuku,
    deleteBuku
}