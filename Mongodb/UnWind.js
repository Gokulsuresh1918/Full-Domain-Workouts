[{
    "_id": ObjectId("5f447130d2c8a3b3e8b45678"),
    "customerName": "John Doe",
    "items": [
        { "productId": "123", "quantity": 2 },
        { "productId": "456", "quantity": 1 }
    ]
}
]
db.order.aggregate([{$unwind:"$items"}]) 