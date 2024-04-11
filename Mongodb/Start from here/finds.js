
// Find documents that match all conditions specified in the $and array.
// The $and operator is used to combine multiple conditions.
db.collections_name.find({ $and: [{ field: value }, { field: value }] })
// Find documents that match at least one of the conditions specified in the $or array.
// The $or operator is used to specify multiple conditions, at least one of which must be true.
db.collections_name.find({ $or: [{ field: value }, { field: value }] })
// Find documents where the specified field does not match the given value.
// The $not operator is used to negate a condition.
db.collections_name.find({ $not: { field: value } })
// Find all documents and sort them by the 'age' field in ascending order.
// The sort() method is used to sort the results.
db.collections_name.find().sort({ age: 1 })
// Find documents where the specified field matches the given value, and return only the 'age' field.
// The second argument to find() specifies the projection, which determines which fields to include or exclude in the result.
db.collections_name.find({ field: value }, { age: 1 })
// Find all documents in the 'employees' collection where the 'employeeId' field
// is divisible by 3. The $mod operator is used to perform a modulo operation,
// with the first argument being the divisor (3) and the second argument being
// the remainder (0), indicating that we're looking for numbers that are
// exactly divisible by 3 with no remainder.
db.employees.find({
    employeeId: { $mod: [3, 0] }
})

// Find documents where the 'addresses' embedded document has a 'street' field with the value '123 Main St'.
db.users.find({ 'addresses.street': '123 Main St' });

// Find documents where the specified field starts with 'j'.
// The $regex operator is used for pattern matching.
db.collections_name.find({ field: { $regex: 'j.*' } })


