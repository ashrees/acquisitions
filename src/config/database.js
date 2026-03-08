import 'dotenv/config';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';

// Initialize the Neon client
const sql = neon(process.env.DATABASE_URL);

// Initialize the drizzle ORM
const db = drizzle(sql);

export { db, sql};