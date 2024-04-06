db.EmployeeInfo.aggregate([
  { $group: { _id: { EmpId: "$EmpId", EmpFname: "$EmpFname"}, 
  count: { $sum:  1 } } },
  { $match: { count: { $gt:  1 } } }
]);
