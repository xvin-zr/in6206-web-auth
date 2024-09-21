import { Router } from 'express';
import { db } from '..';
import { NewUser, users } from '../db/schema';
import bcrypt from 'bcrypt';
import { eq } from 'drizzle-orm';

export const authRouter = Router();

authRouter.post('/login', async function login(req, res) {
    const { email, password } = req.body;

    try {
        const [user] = await db
            .select()
            .from(users)
            .where(eq(users.email, email));
        if (!user) {
            return res.status(401).send('Invalid email or password');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send('Invalid email or password');
        }

        return res.json({
            name: user.name,
            message: `User ${user.name} logged in`,
        });
    } catch (err) {
        res.status(500).send(`Error logging in`);
        throw new Error(`Error logging in: ${err}`);
    }
});

authRouter.post('/signup', async function (req, res) {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // TODO: data validation
    const user: NewUser = {
        name,
        email,
        password: hashedPassword,
    };
    console.log({ user });
    try {
        const existingUser = await findUser(email);
        if (existingUser) {
            return res.status(409).send('User already exists');
        }

        await db.insert(users).values(user);
        res.send(`User ${user.name} created`);
    } catch (err) {
        res.status(500).send(`Error creating user`);
        throw new Error(`Error creating user: ${err}`);
    }
});

async function findUser(email: string) {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
}
