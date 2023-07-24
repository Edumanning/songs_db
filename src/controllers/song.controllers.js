const catchError = require('../utils/catchError');
const Song = require('../models/Song');

const getAll = catchError(async (req, res) => {
    const song = await Song.findAll()
    return res.json(song)
});

const create = catchError(async (req, res) => {
    const song = await Song.create(req.body)
    return res.status(201).json(song)
});

module.exports = {
    getAll,
    create
}