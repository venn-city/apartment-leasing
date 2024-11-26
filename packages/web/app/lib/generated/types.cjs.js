module.exports = {
    "scalars": [
        1,
        2,
        4,
        5,
        10,
        11
    ],
    "types": {
        "Query": {
            "leases": [
                6,
                {
                    "page": [
                        1
                    ],
                    "pageSize": [
                        1
                    ],
                    "search": [
                        2
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Int": {},
        "String": {},
        "Mutation": {
            "createLease": [
                9,
                {
                    "input": [
                        12,
                        "CreateLeaseInput!"
                    ]
                }
            ],
            "updateLeaseOrder": [
                4,
                {
                    "id": [
                        5,
                        "ID!"
                    ],
                    "newOrder": [
                        1,
                        "Int!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Boolean": {},
        "ID": {},
        "LeaseConnection": {
            "edges": [
                7
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "LeaseEdge": {
            "node": [
                9
            ],
            "cursor": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "PageInfo": {
            "hasNextPage": [
                4
            ],
            "endCursor": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Lease": {
            "id": [
                5
            ],
            "address": [
                2
            ],
            "propertyType": [
                11
            ],
            "monthlyRent": [
                10
            ],
            "tenantName": [
                2
            ],
            "tenantEmail": [
                2
            ],
            "tenantPhone": [
                2
            ],
            "startDate": [
                2
            ],
            "endDate": [
                2
            ],
            "securityDeposit": [
                10
            ],
            "displayOrder": [
                1
            ],
            "createdAt": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Float": {},
        "PropertyType": {},
        "CreateLeaseInput": {
            "address": [
                2
            ],
            "propertyType": [
                11
            ],
            "monthlyRent": [
                10
            ],
            "tenantName": [
                2
            ],
            "tenantEmail": [
                2
            ],
            "tenantPhone": [
                2
            ],
            "startDate": [
                2
            ],
            "endDate": [
                2
            ],
            "securityDeposit": [
                10
            ],
            "__typename": [
                2
            ]
        }
    }
}