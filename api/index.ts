import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/auth';
import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import authGoogleRouter from './routes/auth.google';

const app = express();

const PORT = 3003;

const sqlite = new Database('./api/db/db.sqlite');
export const db = drizzle(sqlite);

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);
app.use('/auth', authGoogleRouter);

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});
