// Find all employees whose age is exactly 30.
db.employees.find({ age: { $eq: 30 } })

// Find all employees whose salary is greater than 50,000.
db.employees.find({ salary: { $gt: 50000 } })

// Find all employees whose age is 30 or more.
db.employees.find({ age: { $gte: 30 } })

// Find all employees whose salary is less than 50,000.
db.employees.find({ salary: { $lt: 50000 } })

// Find all employees whose age is 30 or less.
db.employees.find({ age: { $lte: 30 } })

// Find all employees whose name is not "John Doe".
db.employees.find({ name: { $ne: "John Doe" } })

// Find all employees whose name is either "Alice" or "Bob".
db.employees.find({ name: { $in: ["Alice", "Bob"] } })

// Find all employees whose name is neither "Alice" nor "Bob".
db.employees.find({ name: { $nin: ["Alice", "Bob"] } })
