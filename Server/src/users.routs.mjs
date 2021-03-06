import express from 'express';
import { getUsers } from './users.services.mjs';
import { getUserID } from './users.services.mjs';
import { editUser } from './users.services.mjs';
import { deleteUser } from './users.services.mjs';

export const usersRouter = express.Router();


usersRouter.get('/', async (req, res) => {
    res.send(await getUsers());
});

// usersRouter.get('/:id', async (req, res) => {
//     res.send(await getUser(req.params.email));
// });

usersRouter.get('/:id', async (req, res) => {
    res.send(await getUserID(req.params.id));
});


// Update single product from the list
usersRouter.put('/:id', async (req, res) => {
    res.send(await editUser(req.params.id, req.body))
});

// Delete single product from the list
usersRouter.delete('/:id', async (req, res) => {
    res.send(await deleteUser(req.params.id));
});
