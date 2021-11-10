"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUsers = exports.getUserById = exports.getUsers = void 0;
const database_1 = require("../database");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM users');
        return res.status(200).json(response.rows);
    }
    catch (_a) {
        return res.status(500).json({ message: 'erro interno do servidor' });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userId = parseFloat(id);
    try {
        const response = yield database_1.pool.query('SELECT * FROM users WHERE id = $1', [userId]);
        return res.status(200).json(response.rows);
    }
    catch (_b) {
        return res.status(500).json({ message: 'erro interno no servidor' });
    }
});
exports.getUserById = getUserById;
const createUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        const response = yield database_1.pool.query('INSERT INTO users (name, email) VALUES($1, $2)', [name, email]);
        return res.status(201).json({
            message: 'Usuário Criado com sucesso',
            body: {
                users: {
                    name,
                    email
                }
            }
        });
    }
    catch (_c) {
        return res.status(500).json({ message: 'erro interno no sistema' });
    }
});
exports.createUsers = createUsers;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        yield database_1.pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
        return res.status(200).json({ message: `usuario atualizado` });
    }
    catch (_d) {
        return res.status(500).json({ message: 'erro interno no servidor' });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield database_1.pool.query('DELETE FROM users WHERE id = $1', [id]);
        return res.status(200).json({ message: 'Usuário Deletado' });
    }
    catch (_e) {
        return res.status(500).json({ message: 'erro interno no servidor' });
    }
});
exports.deleteUser = deleteUser;
