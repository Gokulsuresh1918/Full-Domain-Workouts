db.student.aggregate([{}, { $rename: { 'oldname': 'newname' } }, { multi: true }])