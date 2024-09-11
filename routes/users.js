const express = require('express');
const router = express.Router();
const db = require('../db');

// CREATE
router.post('/users', (req, res) => {
    const { name, email, password } = req.body;
    const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    db.query(sql, [name, email, password], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ id: result.insertId, name, email });
    });
});

// READ
router.get('/users', (req, res) => {
    const sql = `SELECT * FROM users`;
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(results);
    });
});

// UPDATE
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const sql = `UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?`;
    db.query(sql, [name, email, password, id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ id, name, email });
    });
});

// DELETE
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM users WHERE id = ?`;
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ id });
    });
});

module.exports = router;
