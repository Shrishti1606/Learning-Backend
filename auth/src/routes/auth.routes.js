const express = require('express');
const authController = require("../controllers/auth.controller");
const router = express.Router();

router.post("/register", authController.registerUser);

router.get("/test", (req, res) => {
    res.json({ 
        message: "Test route is working!" ,
        cookies: req.cookies,
    });
    console.log("cookies:", req.cookies);
});

module.exports = router;