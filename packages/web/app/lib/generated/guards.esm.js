
var Query_possibleTypes = ['Query']
export var isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var Mutation_possibleTypes = ['Mutation']
export var isMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



var LeaseConnection_possibleTypes = ['LeaseConnection']
export var isLeaseConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLeaseConnection"')
  return LeaseConnection_possibleTypes.includes(obj.__typename)
}



var LeaseEdge_possibleTypes = ['LeaseEdge']
export var isLeaseEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLeaseEdge"')
  return LeaseEdge_possibleTypes.includes(obj.__typename)
}



var PageInfo_possibleTypes = ['PageInfo']
export var isPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageInfo"')
  return PageInfo_possibleTypes.includes(obj.__typename)
}



var Lease_possibleTypes = ['Lease']
export var isLease = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLease"')
  return Lease_possibleTypes.includes(obj.__typename)
}
