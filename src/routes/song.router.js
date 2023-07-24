const { getAll, create } = require('../controllers/song.controllers');
const express = require('express');

const songRouter = express.Router();

songRouter.route("/")
    .get(getAll)
    .post(create)

module.exports = songRouter;