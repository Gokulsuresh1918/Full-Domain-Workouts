//showing collections
show dbs
//create or enter into a database
use database_name
//showing saved collections
show collections
//create collection
db.createCollection('users');
//to delete collection
db.collections_name.drop()
//to delete database
db.dropDatabase()

//insert document
db.collections_name.insertOne({name:'gokul',age:10})
db.collections_name.insertMany({name:'gokul',age:10},{name:'gokul',age:10})

//find documetn
db.collections_name.findOne()
db.collections_name.find({field: value})

//update
db.collections_name.updataOne({field:value},{$set:{age:29}})

//delete
db.collections_name.deleteOne({field:value})

//embeded document finding
db.users.find({ 'addresses.street': '123 Main St' });

//fing field starting with j
db.collections_name.find({field:{$regex:'j.*'}})
//using and operator
db.collections_name.find({$and:[{field:value},{field:value}]})
//or operator
db.collections_name.find({$or:[{field:value},{field:value}]})
//not operator
db.collections_name.find({$not:{field:value}})
//sorting
db.collections_name.find().sort({age:1})
//projection
db.collections_name.find({field:value},{age:1})
