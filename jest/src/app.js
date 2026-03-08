const express = require('express');
const app = express();
const ValidationRules  = require('./middlewares/validation.middleware');

app.use(express.json());

// app.get("/", (req, res) => {
//     res.status(200).json({ message: "Hello World!" });
// })

app.post("/register", ValidationRules.registerUserValidationRules, (req, res) => {
    const { username, email, password } = req.body;

    res.status(201).json({ message: "User registered successfully", user: { username, email } });
})

module.exports = app;