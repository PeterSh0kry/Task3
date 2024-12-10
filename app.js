const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';

const dbname = 'task-3';

MongoClient.connect(url, (error, res1) => { 

    if(error) {
       return console.log("error has occured");
    }
    console.log("connected to database");

    const db = res1.db(dbname);

    // insertOne 2

    // db.collection('users').insertOne(
    //     {
    //         name: "Mostafa",
    //         age: 22,
    //         city:"Cairo"
    //     }, (error, data) => {
    //         if (error) {
    //             return console.log('Unable to insert data:', error);
    //         }
    //         console.log(data.insertedId);
    //     }
    // )
    // db.collection('users').insertOne(
    //     {
    //         name: "Ahmed",
    //         age: 25,
    //         city:"Alexandria"
    //     }
    //     , (error, data) => {
    //         if (error) {
    //             return console.log('Unable to insert data:', error);
    //         }
    //         console.log(data.insertedId);
    //     }
    // )

    /*************************************************************** */

    /** insertMany 10  */

    // db.collection('users').insertMany([
    //     {
    //         name: 'Peter',
    //         age: 38,
    //         city: 'London'
    //     },
    //     {
    //         name: 'Mostafa',
    //         age: 32,
    //         city: 'Cairo'
    //     },
    //     {
    //         name: 'Ahmed',
    //         age: 30,
    //         city: 'New York'
    //     },
    //     {
    //         name: 'Khaled',
    //         age: 34,
    //         city: 'Alexandria'
    //     },
    //     {
    //         name: 'Ahmed',
    //         age: 29,
    //         city: 'United States'
    //     },
    //     {
    //         name: 'Khaled',
    //         age: 27,
    //         city: 'Cairo'
    //     },
    //     {
    //         name: 'Ahmed',
    //         age: 27,
    //         city: 'New York'
    //     },
    //     {
    //         name: 'Khaled',
    //         age: 27,
    //         city: 'Cairo'
    //     },
    //     {
    //         name: 'Khaled',
    //         age: 27,
    //         city: 'Cairo'
    //     },
    //     {
    //         name: 'Tarek',
    //         age: 27,
    //         city: 'Cairo'
    //     }
    // ], (error, data) => {
    //     if (error) {
    //         return console.log('Unable to insert data');
    //     }
    //     console.log(data.insertedCount);
    // })

    /********************************************** */

    // db.collection('users').find({age: 27}).limit(3).toArray((error, data) => {
    //     if (error) {
    //         return console.log('Unable to find data');
    //     }
    //     console.log(data);
    // })

    /********************************************** */

    // db.collection('users').find({age: 27}).limit(3).count((error, data) => {
    //     if (error) {
    //         return console.log('Unable to find data');
    //     }
    //     console.log(data);
    // })

    /********************************************** */

    // db.collection("users").find().limit(4).toArray()
    //     .then(docs => {
    //         const ids = docs.map(doc => doc._id);
    //         return db.collection("users").updateMany(
    //             { _id: { $in: ids } },
    //             { $set: { name: "Mostafa" } }
    //         );
    //     })
    //     .then((result) => { console.log(result.modifiedCount); })
    //     .catch((err) => { console.log(err); 
    // });

    /************************************************** */

    // db.collection("users").find().limit(4).toArray()
    //     .then(docs => {
    //         const ids = docs.map(doc => doc._id);
    //         return db.collection("users").updateMany(
    //             { _id: { $in: ids } },
    //             { $inc: { age: 10 } }
    //         );
    //     })
    //     .then((result) => { console.log(result.modifiedCount); })
    //     .catch((err) => { console.log(err)});


    /********************************************* */

    // db.collection("users").updateOne({_id:mongodb.ObjectId("67587d7b4971a9f0f6f312d5")},{
    //     $inc:{age: 5}
    // }).
    // then((result) => {console.log(result.modifiedCount);})
    // .catch((err) => {console.log(err);})

    /*********************************************** */

    // db.collection("users").updateMany({},{
    //     $inc:{age:10}
    // })
    // .then((result) => {console.log(result.modifiedCount);})
    // .catch((err) => {console.log(err);})

    /************************************************** */

    // db.collection("users").deleteMany({})
    // .then((result) => {console.log(result.deletedCount);})
    // .catch((err) => {console.log(err);})
})
