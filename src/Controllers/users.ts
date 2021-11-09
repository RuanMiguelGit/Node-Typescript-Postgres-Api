import {Request, Response} from 'express';
import  { pool } from '../database'
import { QueryResult } from 'pg';

export const getUsers = async (req:Request, res:Response) => {
const response :QueryResult = await pool.query('select * from users');
console.log(response.rows)
res.send('response')
}