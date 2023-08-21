const assert = require('assert');

const utils = require('./index');

const MongoClient = require('mongodb').MongoClient;

// test addition
it('should return 2', () => {
  assert.equal(utils.addition(1, 1), 2);
})

// test subtraction
it('should return 2', () => {
  assert.equal(utils.subtraction(1,1), 0);
})

// test multiplication
it('should return 4', () => {
  assert.equal(utils.multiplication(2, 2), 4);
})

// test divide
it('should return 2', () => {
  assert.equal(utils.division(4,2), 2);
})

// test database
// MongoClient.connect('mongodb://localhost:27017', (err, client) => {
//   const db = client.db('TestDB');
//   db.collection('Test').find().toArray().then( (docs) => {
//     // console.log(JSON.stringify(docs, undefined, 2));
//     // console.log(docs);
//     it('should return something to do', () => {
//       assert.equal(docs[0].text === "something to do");
//     })
//   }, (err) => {
//     console.log("unable to fetch", err);
//   })
// })
