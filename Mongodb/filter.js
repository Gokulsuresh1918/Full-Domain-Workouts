[{
    "_id": ObjectId("5f447130d2c8a3b3e8b45678"),
        "name": "Laptop",
            "tags": ["Electronics", "Computers"]
},
{
    "_id": ObjectId("5f447130d2c8a3b3e8b45679"),
        "name": "Smartphone",
            "tags": ["Electronics", "Mobile"]
},
{
    "_id": ObjectId("5f447130d2c8a3b3e8b45680"),
        "name": "Book",
            "tags": ["Books", "Literature"]
}]
//if this is my colleciton

db.products.aggregate([
    {
        $project: {
            name: 1,
            tags: {
                $filter: {
                    input: "$tags",
                    as: "tag",
                    cond: { $eq: ["$$tag", "Electronics"] }
                }
            }
        }
    }
])


// $project: Specifies the fields to include in the output documents. In this case,
//  it includes the name field and a new field tags.
// $filter: Specifies the array to filter ($tags),
//  the variable name for the elements of the array (as: "tag"),
//   and the condition to match (cond: { $eq: ["$$tag", "Electronics"] }).
//    This condition checks if the tag is equal to "Electronics".