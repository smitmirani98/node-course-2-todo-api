const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TOdoApp',(err,db)=>  {
  if(err){
    return console.log("cannot connect to db");
  }
  console.log('connected to mongodb server');

  db.collection('Users').findOneAndDelete({nam:"smit"}).then((result)=>{
    console.log(result);
    });



  // db.close();
});
