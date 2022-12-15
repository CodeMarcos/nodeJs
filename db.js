const mongoClient = require ("mongodb").MongoClient;
mongoClient.connect("mongodb://0.0.0.0:27017",
	                {useUnifiedTopology: true},
	                (error,connection)=>{
	                	if(error) return console.log(error);
	                	const db = client.db('nodeCrud');
  						const collection = db.collection('Client');
	                	console.log("connect!");
	                });

function findAll() {
    return global.conn.collection("customers").find().toArray();
}
 
module.exports = { findAll }