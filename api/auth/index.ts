import { Router } from 'express';

export const authRouter = Router();

authRouter.post('/signup', function (req, res) {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
});
