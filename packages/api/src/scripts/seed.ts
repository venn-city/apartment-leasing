/* eslint-disable no-console */
import { sql } from '../db';
import { faker } from '@faker-js/faker';

const TOTAL_LEASES = 100_000;
const BATCH_SIZE = 1000;

type LeaseData = {
  address: string;
  property_type: 'APARTMENT' | 'HOUSE' | 'CONDO';
  monthly_rent: number;
  tenant_name: string;
  tenant_email: string;
  tenant_phone: string;
  start_date: Date;
  end_date: Date;
  security_deposit: number;
  display_order: number;
};

async function generateLease(index: number): Promise<LeaseData> {
  const startDate = faker.date.future();
  const endDate = new Date(startDate);
  endDate.setFullYear(endDate.getFullYear() + 1);

  const monthlyRent = faker.number.int({ min: 1000, max: 5000 });

  return {
    address: faker.location.streetAddress(true),
    property_type: faker.helpers.arrayElement(['APARTMENT', 'HOUSE', 'CONDO']),
    monthly_rent: monthlyRent,
    tenant_name: faker.person.fullName(),
    tenant_email: faker.internet.email(),
    tenant_phone: faker.phone.number(),
    start_date: startDate,
    end_date: endDate,
    security_deposit: monthlyRent * 2,
    display_order: index,
  };
}

async function seed() {
  try {
    console.log('Starting seed process...');
    console.log(`Generating ${TOTAL_LEASES} leases...`);

    // Clear existing data
    await sql`TRUNCATE TABLE leases RESTART IDENTITY CASCADE`;

    // Insert in batches
    for (let i = 0; i < TOTAL_LEASES; i += BATCH_SIZE) {
      const batchData = await Promise.all(
        Array.from({ length: Math.min(BATCH_SIZE, TOTAL_LEASES - i) }).map((_, index) =>
          generateLease(i + index)
        )
      );

      await sql`
        INSERT INTO leases ${sql(
          batchData,
          'address',
          'property_type',
          'monthly_rent',
          'tenant_name',
          'tenant_email',
          'tenant_phone',
          'start_date',
          'end_date',
          'security_deposit',
          'display_order'
        )}
      `;

      console.log(`Inserted ${i + batchData.length} leases...`);
    }

    console.log('Seed completed successfully!');
  } catch (error) {
    console.error('Seed failed:', error);
    process.exit(1);
  } finally {
    await sql.end();
  }
}

seed();
