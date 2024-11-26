import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
    //const { leases } = await gqlClient.query({ leases: {} })
    return {

    };
};

export default function LeaseList() {
    // TODO: Implement the following features:
    // 1. GraphQL query to fetch paginated leases
    // 2. Implement drag and drop reordering
    // 3. Add pagination controls
    // 4. Add search/filter functionality
    // 5. Handle loading and error states

    return (
        <div>
            {/* Implement lease list UI here */}
        </div>
    );
}