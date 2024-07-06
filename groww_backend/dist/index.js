"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dashboardController_1 = require("./controllers/dashboardController");
const pg_1 = require("pg");
const app = (0, express_1.default)();
const port = 3000;
const pool = new pg_1.Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/dashboard', dashboardController_1.getDashboardData);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
