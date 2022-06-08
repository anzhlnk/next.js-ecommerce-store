import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();
const sql = postgres();

await sql`
SELECT * FROM products`;
