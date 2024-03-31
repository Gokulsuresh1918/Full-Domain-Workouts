db.students.aggregate([
    { $match: { age: { $gte: 18 } } }, // Filter students who are 18 years or older
    { $sort: { score: -1 } } // Sort by score in descending order
   ])
   