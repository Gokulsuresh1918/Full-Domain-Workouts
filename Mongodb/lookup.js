db.orders.aggregate([
    {
        $lookup: {
            from: "products",//collection we need to left join
            localField: "products",//similar field in orders collection
            foreignField: "_id",//field similar ot orders cooolection on product colleciton
            as: "orderProducts"// as which name we need to merge
        }
    }
])
