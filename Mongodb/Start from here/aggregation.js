db.users.aggregate([
    {
      $project: {
        posts: 0,
      },
    },
  ]);
  db.employees.aggregate([
    { $match: { age: { $gt: 30 } } }
  ])
  db.orders.aggregate([
    {
      $group: {
        _id: '$customer_id',
        total_spent: { $sum: '$amount' },//$sum, $avg, $min, $max, $push
      },
    },
  ]);
  db.students.aggregate([{ $sort: { age: -1, name: 1 } }]);
  db.sales.aggregate([{ $unwind: { path: '$orders' } }]);