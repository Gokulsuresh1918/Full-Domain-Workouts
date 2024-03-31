db.students.aggregate([
    {
        $group: {
            _id: null, // Group all documents together
            totalScore: { $sum: "$score" } // Calculate the sum of scores
        }
    }
])




db.students.aggregate([
    {
      $group: {
        _id: null, // Group all documents together
        averageScore: { $avg: "$score" } // Calculate the average of scores
      }
    }
   ])
   