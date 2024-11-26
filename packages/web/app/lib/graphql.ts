import { createClient } from './generated';

const GRAPHQL_URL = process.env.GRAPHQL_URL || 'http://localhost:4000/graphql';

export const gqlClient = createClient({
  url: GRAPHQL_URL,
});

// Example query helper
export async function getLeases({
  page = 1,
  pageSize = 10,
  search,
}: {
  page?: number;
  pageSize?: number;
  search?: string;
}) {
  return gqlClient.query({
    leases: {
      __args: {
        page,
        pageSize,
        search,
      },
      edges: {
        node: {
          id: true,
          address: true,
          propertyType: true,
          monthlyRent: true,
          tenantName: true,
          startDate: true,
          endDate: true,
          displayOrder: true,
        },
        cursor: true,
      },
      pageInfo: {
        hasNextPage: true,
        endCursor: true,
      },
      totalCount: true,
    },
  });
}
