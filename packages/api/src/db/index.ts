import postgres from 'postgres';

// Create postgres connection
export const sql = postgres(
  process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/apartment_leasing',
  {
    max: 10,
    idle_timeout: 20,
    connect_timeout: 10,
  }
);

export type DBLease = {
  id: number;
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
  created_at: Date;
};
