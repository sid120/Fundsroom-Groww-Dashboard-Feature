import express from 'express';
import { getDashboardData } from './controllers/dashboardController';
import cors from 'cors';

import { Pool } from 'pg';

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/dashboard', getDashboardData);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
