import express from 'express';
import { authRouter } from './auth';

const app = express();

const PORT = 3003;

app.use(express.json());
app.use('/auth', authRouter);

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});
