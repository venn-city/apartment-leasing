import { generate } from '@genql/cli';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateGraphQLTypes() {
  const schemaPath = join(__dirname, '../../../packages/api/src/schema.graphql');
  const outputPath = join(__dirname, '../app/lib/generated');

  try {
    // Ensure schema file exists
    await fs.access(schemaPath);

    await generate({
      schema: schemaPath,
      output: outputPath,
      scalarTypes: {
        DateTime: 'string',
      },
    });

    console.log('✨ GraphQL types generated successfully!');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`Schema file not found at: ${schemaPath}`);
    } else {
      console.error('Error generating GraphQL types:', error);
    }
    process.exit(1);
  }
}

generateGraphQLTypes();
