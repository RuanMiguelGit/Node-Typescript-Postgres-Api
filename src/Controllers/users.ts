import {query, Request, Response} from 'express';
import  { pool } from '../database'
import { QueryResult } from 'pg';

export const getUsers = async (req:Request, res:Response):Promise<Response> => {
    try {
        const response :QueryResult = await pool.query('SELECT * FROM users');
        return res.status(200).json(response.rows)
    }
    catch {
        return res.status(500).json({message:'erro interno do servidor'})
    }
}

export const getUserById = async (req:Request, res:Response):Promise<Response> => {
    const { id } = req.params
    const userId = parseFloat(id)
    try {
        const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1',  [userId])
        return res.status(200).json(response.rows)
    }catch {
       return res.status(500).json({message:'erro interno no servidor'})
    }
}

export const createUsers = async (req:Request, res:Response):Promise<Response> => {
 const { name, email } = req.body
 try {
    const response:QueryResult = await pool.query('INSERT INTO users (name, email) VALUES($1, $2)', [name, email])
    return res.status(201).json({
        message: 'Usuário Criado com sucesso',
        body : {
            users: {
                name,
                email
            }
        }
    })
}
catch{
    return res.status(500).json({message:'erro interno no sistema'})
    }

}

export const updateUser = async (req:Request, res:Response):Promise<Response> => {
    const { id } = req.params
    const { name, email } = req.body

    try {
        await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id])
        return res.status(200).json({message:`usuario atualizado`}) 
    }
    catch {
        return res.status(500).json({message:'erro interno no servidor'})
    }
}

export const deleteUser = async (req:Request, res:Response):Promise<Response> => {
    const { id } = req.params
    try {
        await pool.query('DELETE FROM users WHERE id = $1', [id])
        return res.status(200).json({message:'Usuário Deletado'})
    }
    catch{ 
        return res.status(500).json({message:'erro interno no servidor'})
    }
}