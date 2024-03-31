db.EmployeeInfo.aggregate([
  { $group: { _id: { EmpId: "$EmpId", EmpFname: "$EmpFname", EmpLname: "$EmpLname", Department: "$Department", Salary: "$Salary" }, count: { $sum:  1 } } },
  { $match: { count: { $gt:  1 } } }
]);
