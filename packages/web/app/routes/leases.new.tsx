import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
    //await gqlClient.mutation({ createLease: {} })
    return {

    };
};

export default function NewLease() {
    // TODO: Implement multi-step form with the following steps:

    // Step 1: Property Details
    // Required fields:
    // - Property address (string)
    // - Property type (select: Apartment, House, Condo)
    // - Monthly rent (number)

    // Step 2: Tenant Information
    // Required fields:
    // - Full name (string)
    // - Email (string, validated)
    // - Phone number (string, validated)

    // Step 3: Lease Terms
    // Required fields:
    // - Lease start date (date)
    // - Lease end date (date)
    // - Security deposit amount (number)

    // Requirements:
    // - Implement form state persistence between steps
    // - Add validation for all required fields
    // - Show progress indicator for current step
    // - Enable back/next navigation
    // - Create GraphQL mutation for final submission

    return (
        <div>
            {/* Implement multi-step form UI here */}
        </div>
    );
}