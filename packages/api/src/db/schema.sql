-- Create custom types
CREATE TYPE property_type AS ENUM ('APARTMENT', 'HOUSE', 'CONDO');

-- Create leases table
CREATE TABLE
    leases (
        id SERIAL PRIMARY KEY,
        address TEXT NOT NULL,
        property_type property_type NOT NULL,
        monthly_rent DECIMAL(10, 2) NOT NULL,
        tenant_name TEXT NOT NULL,
        tenant_email TEXT NOT NULL,
        tenant_phone TEXT NOT NULL,
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        security_deposit DECIMAL(10, 2) NOT NULL,
        display_order INTEGER NOT NULL,
        created_at TIMESTAMP
        WITH
            TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

-- Create index for search
CREATE INDEX idx_leases_search ON leases (
    tenant_name text_pattern_ops,
    address text_pattern_ops
);

-- Create index for ordering
CREATE INDEX idx_leases_display_order ON leases (display_order);