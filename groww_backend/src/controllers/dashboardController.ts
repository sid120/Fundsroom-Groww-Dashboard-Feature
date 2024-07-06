import { Request, Response } from 'express';
import { Pool } from 'pg';

const pool = new Pool();

export const getDashboardData = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM your_table');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
