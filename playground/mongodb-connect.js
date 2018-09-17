// cd Program Files\MongoDB\Server\4.0\bin\
// mongod.exe --dbpath /Users/dev001/mongo-data


const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true }, (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo DB server');

  const myDb = db.db('TodoApp');
  myDb.collection('Todos').insertOne({
    text: 'Something to do',
    Completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
