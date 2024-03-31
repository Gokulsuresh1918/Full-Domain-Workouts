db.universities.aggregate([
    { $match : { country : 'Spain', city : 'Salamanca' } }
  ])