import { Pool } from 'pg'

export const pool = new Pool({
    user:'postgres',
    host:'localhost',
    password:'5665123456',
    database:'apitypescript',
    port: 5432
})