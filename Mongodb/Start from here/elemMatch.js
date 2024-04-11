{
    "_id": 1,
    "name": "John Doe",
    "scores": [
       { "subject": "Math", "score": 85 },
       { "subject": "English", "score": 90 },
       { "subject": "Science", "score": 95 }
    ]
   }
   //if thisis our data we need ot  querry inside this array of scores
   db.collection_name.find({score:{$elemMatch:{subject:'Math',score:80}}})