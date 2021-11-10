import { Router } from 'express'
const router = Router();

import { getUsers, getUserById, updateUser, deleteUser, createUsers } from '../Controllers/users'

router.get('/users', getUsers )
router.post('/users', createUsers )
router.get('/users/:id', getUserById )
router.put('/users/:id', updateUser )
router.delete('/users/:id', deleteUser )


export default router
