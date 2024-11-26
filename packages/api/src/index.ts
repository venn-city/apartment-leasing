import { createServer } from 'node:http';
import { createYoga, createSchema } from 'graphql-yoga';
import { resolvers } from './resolvers';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// Read schema file
const typeDefs = readFileSync(join(__dirname, 'schema.graphql'), 'utf-8');

// Create Yoga instance
const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
});

// Create server
const server = createServer(yoga);

const port = process.env.PORT || 4000;

// Start server
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);
});
