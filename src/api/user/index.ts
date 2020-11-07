import express from 'express';

import {
    index,
    create,
    remove,
    update
} from './user.controller';

let userRouter = express.Router();

userRouter.get('/', index);
userRouter.post('/', create);
userRouter.delete('/', remove);
userRouter.put('/', update);

export default userRouter;