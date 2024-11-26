/* eslint-disable no-console */
import { sql } from '../db';
import { readFileSync } from 'fs';
import { join } from 'path';

async function migrate() {
  try {
    console.log('Starting database migration...');

    // Read the schema file
    const schema = readFileSync(join(__dirname, '..', 'db', 'schema.sql'), 'utf-8');

    // Execute the schema
    await sql.unsafe(schema);

    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await sql.end();
  }
}

migrate();
