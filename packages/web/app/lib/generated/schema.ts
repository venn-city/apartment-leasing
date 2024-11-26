import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Int: number,
    String: string,
    Boolean: boolean,
    ID: string,
    Float: number,
}

export interface Query {
    /** Get a paginated list of leases */
    leases: LeaseConnection
    __typename: 'Query'
}

export interface Mutation {
    /** Create a new lease */
    createLease: Lease
    /** Update lease display order */
    updateLeaseOrder: Scalars['Boolean']
    __typename: 'Mutation'
}

export interface LeaseConnection {
    /** List of lease edges */
    edges: LeaseEdge[]
    /** Pagination information */
    pageInfo: PageInfo
    /** Total count of leases */
    totalCount: Scalars['Int']
    __typename: 'LeaseConnection'
}

export interface LeaseEdge {
    /** The lease node */
    node: Lease
    /** Cursor for pagination */
    cursor: Scalars['String']
    __typename: 'LeaseEdge'
}

export interface PageInfo {
    /** Whether there are more items */
    hasNextPage: Scalars['Boolean']
    /** Last cursor in the current page */
    endCursor?: Scalars['String']
    __typename: 'PageInfo'
}

export interface Lease {
    /** Unique identifier */
    id: Scalars['ID']
    /** Property address */
    address: Scalars['String']
    /** Property type */
    propertyType: PropertyType
    /** Monthly rent amount */
    monthlyRent: Scalars['Float']
    /** Tenant's full name */
    tenantName: Scalars['String']
    /** Tenant's email */
    tenantEmail: Scalars['String']
    /** Tenant's phone number */
    tenantPhone: Scalars['String']
    /** Start date of the lease */
    startDate: Scalars['String']
    /** End date of the lease */
    endDate: Scalars['String']
    /** Security deposit amount */
    securityDeposit: Scalars['Float']
    /** Display order for sorting */
    displayOrder: Scalars['Int']
    /** When the lease was created */
    createdAt: Scalars['String']
    __typename: 'Lease'
}

export type PropertyType = 'APARTMENT' | 'HOUSE' | 'CONDO'

export interface QueryRequest{
    /** Get a paginated list of leases */
    leases?: [{
    /** Page number, starting from 1 */
    page?: (Scalars['Int'] | null),
    /** Number of items per page */
    pageSize?: (Scalars['Int'] | null),
    /** Optional search term for address or tenant name */
    search?: (Scalars['String'] | null)},LeaseConnectionRequest] | LeaseConnectionRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationRequest{
    /** Create a new lease */
    createLease?: [{input: CreateLeaseInput},LeaseRequest]
    /** Update lease display order */
    updateLeaseOrder?: [{
    /** The lease ID to update */
    id: Scalars['ID'],
    /** New display order position */
    newOrder: Scalars['Int']}]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaseConnectionRequest{
    /** List of lease edges */
    edges?: LeaseEdgeRequest
    /** Pagination information */
    pageInfo?: PageInfoRequest
    /** Total count of leases */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaseEdgeRequest{
    /** The lease node */
    node?: LeaseRequest
    /** Cursor for pagination */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageInfoRequest{
    /** Whether there are more items */
    hasNextPage?: boolean | number
    /** Last cursor in the current page */
    endCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaseRequest{
    /** Unique identifier */
    id?: boolean | number
    /** Property address */
    address?: boolean | number
    /** Property type */
    propertyType?: boolean | number
    /** Monthly rent amount */
    monthlyRent?: boolean | number
    /** Tenant's full name */
    tenantName?: boolean | number
    /** Tenant's email */
    tenantEmail?: boolean | number
    /** Tenant's phone number */
    tenantPhone?: boolean | number
    /** Start date of the lease */
    startDate?: boolean | number
    /** End date of the lease */
    endDate?: boolean | number
    /** Security deposit amount */
    securityDeposit?: boolean | number
    /** Display order for sorting */
    displayOrder?: boolean | number
    /** When the lease was created */
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateLeaseInput {
/** Property address */
address: Scalars['String'],
/** Type of property */
propertyType: PropertyType,
/** Monthly rent amount */
monthlyRent: Scalars['Float'],
/** Tenant's full name */
tenantName: Scalars['String'],
/** Tenant's email */
tenantEmail: Scalars['String'],
/** Tenant's phone number */
tenantPhone: Scalars['String'],
/** Start date of the lease */
startDate: Scalars['String'],
/** End date of the lease */
endDate: Scalars['String'],
/** Security deposit amount */
securityDeposit: Scalars['Float']}


const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const Mutation_possibleTypes: string[] = ['Mutation']
export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



const LeaseConnection_possibleTypes: string[] = ['LeaseConnection']
export const isLeaseConnection = (obj?: { __typename?: any } | null): obj is LeaseConnection => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLeaseConnection"')
  return LeaseConnection_possibleTypes.includes(obj.__typename)
}



const LeaseEdge_possibleTypes: string[] = ['LeaseEdge']
export const isLeaseEdge = (obj?: { __typename?: any } | null): obj is LeaseEdge => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLeaseEdge"')
  return LeaseEdge_possibleTypes.includes(obj.__typename)
}



const PageInfo_possibleTypes: string[] = ['PageInfo']
export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
  return PageInfo_possibleTypes.includes(obj.__typename)
}



const Lease_possibleTypes: string[] = ['Lease']
export const isLease = (obj?: { __typename?: any } | null): obj is Lease => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLease"')
  return Lease_possibleTypes.includes(obj.__typename)
}


export interface QueryPromiseChain{
    
/** Get a paginated list of leases */
leases: ((args?: {
/** Page number, starting from 1 */
page?: (Scalars['Int'] | null),
/** Number of items per page */
pageSize?: (Scalars['Int'] | null),
/** Optional search term for address or tenant name */
search?: (Scalars['String'] | null)}) => LeaseConnectionPromiseChain & {get: <R extends LeaseConnectionRequest>(request: R, defaultValue?: FieldsSelection<LeaseConnection, R>) => Promise<FieldsSelection<LeaseConnection, R>>})&(LeaseConnectionPromiseChain & {get: <R extends LeaseConnectionRequest>(request: R, defaultValue?: FieldsSelection<LeaseConnection, R>) => Promise<FieldsSelection<LeaseConnection, R>>})
}

export interface QueryObservableChain{
    
/** Get a paginated list of leases */
leases: ((args?: {
/** Page number, starting from 1 */
page?: (Scalars['Int'] | null),
/** Number of items per page */
pageSize?: (Scalars['Int'] | null),
/** Optional search term for address or tenant name */
search?: (Scalars['String'] | null)}) => LeaseConnectionObservableChain & {get: <R extends LeaseConnectionRequest>(request: R, defaultValue?: FieldsSelection<LeaseConnection, R>) => Observable<FieldsSelection<LeaseConnection, R>>})&(LeaseConnectionObservableChain & {get: <R extends LeaseConnectionRequest>(request: R, defaultValue?: FieldsSelection<LeaseConnection, R>) => Observable<FieldsSelection<LeaseConnection, R>>})
}

export interface MutationPromiseChain{
    
/** Create a new lease */
createLease: ((args: {input: CreateLeaseInput}) => LeasePromiseChain & {get: <R extends LeaseRequest>(request: R, defaultValue?: FieldsSelection<Lease, R>) => Promise<FieldsSelection<Lease, R>>}),
    
/** Update lease display order */
updateLeaseOrder: ((args: {
/** The lease ID to update */
id: Scalars['ID'],
/** New display order position */
newOrder: Scalars['Int']}) => {get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface MutationObservableChain{
    
/** Create a new lease */
createLease: ((args: {input: CreateLeaseInput}) => LeaseObservableChain & {get: <R extends LeaseRequest>(request: R, defaultValue?: FieldsSelection<Lease, R>) => Observable<FieldsSelection<Lease, R>>}),
    
/** Update lease display order */
updateLeaseOrder: ((args: {
/** The lease ID to update */
id: Scalars['ID'],
/** New display order position */
newOrder: Scalars['Int']}) => {get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface LeaseConnectionPromiseChain{
    
/** List of lease edges */
edges: ({get: <R extends LeaseEdgeRequest>(request: R, defaultValue?: FieldsSelection<LeaseEdge, R>[]) => Promise<FieldsSelection<LeaseEdge, R>[]>}),
    
/** Pagination information */
pageInfo: (PageInfoPromiseChain & {get: <R extends PageInfoRequest>(request: R, defaultValue?: FieldsSelection<PageInfo, R>) => Promise<FieldsSelection<PageInfo, R>>}),
    
/** Total count of leases */
totalCount: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface LeaseConnectionObservableChain{
    
/** List of lease edges */
edges: ({get: <R extends LeaseEdgeRequest>(request: R, defaultValue?: FieldsSelection<LeaseEdge, R>[]) => Observable<FieldsSelection<LeaseEdge, R>[]>}),
    
/** Pagination information */
pageInfo: (PageInfoObservableChain & {get: <R extends PageInfoRequest>(request: R, defaultValue?: FieldsSelection<PageInfo, R>) => Observable<FieldsSelection<PageInfo, R>>}),
    
/** Total count of leases */
totalCount: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface LeaseEdgePromiseChain{
    
/** The lease node */
node: (LeasePromiseChain & {get: <R extends LeaseRequest>(request: R, defaultValue?: FieldsSelection<Lease, R>) => Promise<FieldsSelection<Lease, R>>}),
    
/** Cursor for pagination */
cursor: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface LeaseEdgeObservableChain{
    
/** The lease node */
node: (LeaseObservableChain & {get: <R extends LeaseRequest>(request: R, defaultValue?: FieldsSelection<Lease, R>) => Observable<FieldsSelection<Lease, R>>}),
    
/** Cursor for pagination */
cursor: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface PageInfoPromiseChain{
    
/** Whether there are more items */
hasNextPage: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    
/** Last cursor in the current page */
endCursor: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface PageInfoObservableChain{
    
/** Whether there are more items */
hasNextPage: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    
/** Last cursor in the current page */
endCursor: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface LeasePromiseChain{
    
/** Unique identifier */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Property address */
address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Property type */
propertyType: ({get: (request?: boolean|number, defaultValue?: PropertyType) => Promise<PropertyType>}),
    
/** Monthly rent amount */
monthlyRent: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>}),
    
/** Tenant's full name */
tenantName: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Tenant's email */
tenantEmail: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Tenant's phone number */
tenantPhone: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Start date of the lease */
startDate: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** End date of the lease */
endDate: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Security deposit amount */
securityDeposit: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>}),
    
/** Display order for sorting */
displayOrder: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** When the lease was created */
createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface LeaseObservableChain{
    
/** Unique identifier */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Property address */
address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Property type */
propertyType: ({get: (request?: boolean|number, defaultValue?: PropertyType) => Observable<PropertyType>}),
    
/** Monthly rent amount */
monthlyRent: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>}),
    
/** Tenant's full name */
tenantName: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Tenant's email */
tenantEmail: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Tenant's phone number */
tenantPhone: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Start date of the lease */
startDate: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** End date of the lease */
endDate: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Security deposit amount */
securityDeposit: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>}),
    
/** Display order for sorting */
displayOrder: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** When the lease was created */
createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}