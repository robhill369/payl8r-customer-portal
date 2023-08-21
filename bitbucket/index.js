const MongoClient = require('mongodb').MongoClient;

// addition
const addition = (a, b) => {
  return a + b;
}

// subtraction
const subtraction = (a, b) => {
  return a - b;
}

// multiplication
const multiplication = (a, b) => {
  return a * b;
}

// division
const division = (a, b) => {
  return a / b;
}

// Connection URL
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log("there's been an error");
  }
  console.log("it's connected!");

  const db = client.db('TestDB');

  db.collection('Test').insertOne({
    text: 'something to do'
  }, (err, result) => {
    if (err) {
      return console.log('unable to create', err)
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  client.close();

});


module.exports = {
  addition, subtraction, multiplication, division
}
