import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './api/db/schema.ts',
    dialect: 'sqlite',
    dbCredentials: {
        url: './api/db/db.sqlite',
    },
    out: './api/db/drizzle',
});
