import { Router } from 'express';
import * as jwtJsDecode from 'jwt-js-decode';

const authGoogleRouter = Router();

authGoogleRouter.post('/google/login', (req, res) => {
    const jwt = jwtJsDecode.jwtDecode(req.body.credential.credential);
    const user = {
        email: jwt.payload.email,
        name: jwt.payload.name,
    };
    res.json({ ...user, message: 'Login Successfully' });
});

export default authGoogleRouter;
