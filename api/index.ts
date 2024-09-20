import express from 'express';
import { authRouter } from './routes/auth';
import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';

const app = express();

const PORT = 3003;

const sqlite = new Database('./db/db.sqlite');
export const db = drizzle(sqlite);

app.use(express.json());
app.use('/auth', authRouter);

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});
