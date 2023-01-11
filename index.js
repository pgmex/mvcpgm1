var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, {useNewUrlParser: true},function(err, db)
{ if(!err)
  {
  var server =  app.listen(3005, function()
  {
  var port = server.address().port;
  console.log('student app listening on port 3005! go to http://localhost:%s',port);
  });
  
app.get('/',function(req,res)
    { 
      res.sendFile(__dirname + '/'+'exp1.html');
  });
  

app.get('/stud_get', function(req, res)
{
var dbo = db.db("student");
var myobj= {
  USN :req.query.usn,
  Name:req.query.name,
  sex:req.query.sex,
  Semester:req.query.sem,
  college:req.query.college,
  adhar:req.query.adhar,
  pass:req.query.pass_no,
  account:req.query.bank_acc
};
dbo.collection("student").insertOne(myobj)
  res.send('<p>USN : '+req.query.usn+'</p><p>Name : '+req.query.name+'</p><p>Sex : '+req.query.sex+'</p><p>Semester : '+req.query.sem+'</p><p>College :'+req.query.college+'</p><p>Addhar No. : '+req.query.adhar+'</p><p>passport No. : '+req.query.pass_no+'</p><p> Bank Account No : '+req.query.bank_acc+'</p>');
});
}
else
db.close();
});
