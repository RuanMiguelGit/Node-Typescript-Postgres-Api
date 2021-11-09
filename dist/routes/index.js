"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const users_1 = require("../Controllers/users");
router.get('/users', users_1.getUsers);
// router.get('/users/:id', getUsers )
// router.post('/users', getUsers )
// router.put('/users/:id', getUsers )
// router.delete('/users/:id', getUsers )
exports.default = router;
