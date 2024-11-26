import { sql } from '../db';
import type { DBLease } from '../db';

export const resolvers = {
  Query: {
    leases: async (_: any, args: { page: number; pageSize: number; search?: string }) => {
      // TODO: Implement lease pagination query
      // Requirements:
      // 1. Use the page and pageSize arguments for pagination
      // 2. Implement cursor-based pagination using display_order and id
      // 3. Add search functionality for address and tenant_name
      // 4. Return total count
      // 5. Properly format the connection type response

      //const leases = await sql`SELECT * FROM leases`;
      return {
        edges: [],
        pageInfo: {
          hasNextPage: false,
          endCursor: null,
        },
        totalCount: 0,
      };
    },
  },

  Mutation: {
    createLease: async (_: any, { input }: { input: any }) => {
      // TODO: Implement lease creation
      // Requirements:
      // 1. Validate input data
      // 2. Calculate next display_order value
      // 3. Insert new lease
      // 4. Return created lease
      throw new Error('Not implemented');
    },

    updateLeaseOrder: async (_: any, { id, newOrder }: { id: string; newOrder: number }) => {
      // TODO: Implement order updating (how can this be optimized?)
      // Requirements:
      // 1. Validate lease exists
      // 2. Update display_order of affected leases
      // 3. Handle edge cases (first/last position)
      // 4. Use transaction for atomicity
      throw new Error('Not implemented');
    },
  },

  Lease: {
    id: (lease: DBLease) => lease.id.toString(),
    propertyType: (lease: DBLease) => lease.property_type,
    startDate: (lease: DBLease) => lease.start_date.toISOString(),
    endDate: (lease: DBLease) => lease.end_date.toISOString(),
    createdAt: (lease: DBLease) => lease.created_at.toISOString(),
  },
};
