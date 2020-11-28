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
userRouter.delete('/', middleware.isAuthenticated, remove);
userRouter.put('/', middleware.isAuthenticated, update);
userRouter.post('/register', middleware.isAuthenticated, register);
userRouter.post('/signin', middleware.isAuthenticated, signin);

export default userRouter;