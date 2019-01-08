const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TOdoApp',(err,db)=>  {
  if(err){
    return console.log("cannot connect to db");
  }
  console.log('connected to mongodb server');

  // var user={name:'smit1',age:20}
  // var {name}=user;;
  // console.log(name);
  // db.collection('Todos').insertOne({
  //   text:'haha',
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('cant connect to server',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // db.collection('Users').insertOne({
  //   name:'smit',
  //   age:'20',
  //   location:'mumbai'
  // },(err,result)=>{
  //   if(err){
  //     return console.log('cant insert',err);
  //   }
  //   console.log(result.ops);
  // });
  db.collection('Users').find({name: 'smit'}).toArray().then((docs)=>{
    console.log('hoho');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('unable to fetch',err);
  });



  // db.close();
});
