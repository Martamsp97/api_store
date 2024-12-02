// Creation and configuration of the Express APP
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Route configuration
// Ex.
app.use('/api', require('./routes/api.routes.js'));

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Ruta no encontrada'
    });
})

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json(err);
})

module.exports = app;