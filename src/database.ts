import { Pool } from 'pg'

export const pool = new Pool({
    user:'postgres',
    host:'localhost',
    password:'566512',
    database:'apitypescript',
    port: 5432
})