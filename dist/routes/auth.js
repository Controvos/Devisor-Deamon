"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('/login').get((req, res) => {
    res.send('Login GET request');
});
exports.default = router;
