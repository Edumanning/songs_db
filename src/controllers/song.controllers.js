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

const getOne = catchError(async (req,res) => {
    const { id } = req.params
    const song = await Song.findByPk(id)
    if(!song) return res.status(404).json({message: "Song not found"})
    return res.json(Song)
})

const remove = catchError(async (req,res) => {
    const { id } = req.params
    const removeSong = await Song.destroy({ where: { id }})
    if(!removeSong) return res.status(404).json({message: "Song not found"})

    return res.sendStatus(204)
})

const update = catchError(async(req,res) =>{
    const { id } = req.params
    const song = req.body

    const songUpDate = await Song.update(song, {where: {id}, returning: true})
    if(songUpDate[0] === 0 ) return res.status(404).json({message: "Song not found"})
    return res.json(songUpDate[1][0]) 
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}