const express = require('express');
const videos = require('./VideosRouter');

module.exports = app => {
    app.use(express.json());
    app.use(videos);
}