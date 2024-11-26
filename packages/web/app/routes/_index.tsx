import { type LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
    return {
        message: "Welcome to Apartment Leasing System"
    };
};

export default function Index() {
    const { message } = useLoaderData<typeof loader>();

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900">
                    {message}
                </h1>
                <div className="mt-8 space-x-4">
                    <Link
                        to="/leases"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        View Leases
                    </Link>
                    <Link
                        to="/leases/new"
                        className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        Create New Lease
                    </Link>
                </div>
            </div>
        </div>
    );
}