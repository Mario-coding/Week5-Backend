import express from 'express';
import * as middleware from '../../middleware';
import {
    index,
    register,
    remove,
    update,
    signin
} from './user.controller';

let userRouter = express.Router();

userRouter.get('/', middleware.isAuthenticated, index);
userRouter.delete('/:id', middleware.isAuthenticated, remove);
userRouter.put('/:id', middleware.isAuthenticated, update);
userRouter.post('/register', register);
userRouter.post('/signin', signin);

export default userRouter;