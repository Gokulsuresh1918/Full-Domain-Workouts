db.universities.aggregate([
    { $project: { _id: 0, country: 1, city: 1, name: 1 } }
])