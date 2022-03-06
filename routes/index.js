const express = require('express');

const constructorMethod = (app) => {

    app.get('/', (req, res) => {
        //http://localhost:3000/ renders the index page
        res.render('index');
    });

    app.get('/classes', (req, res) => {
        //http://localhost:3000/classes renders the classes page
        res.render('classes');
    });

    app.get('/experience', (req, res) => {
        //http://localhost:3000/experience renders the experience page
        res.render('experience');
    });

    app.get('/projects', (req, res) => {
        //http://localhost:3000/projects renders the projects page
        res.render('projects');
    });

    app.get('/resume', (req, res) => {
        //http://localhost:3000/resume renders the projects page
        res.render('resume');
    });

    app.use('*', (req, res) => {
        //any other route goes to 404
        res.status(404).json({ error: 'Not found' });
    });

};
  
module.exports = constructorMethod;