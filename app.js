var express = require('express');
var app = express();
var router = express.Router();

router.get('/',function(req,res) {
    res.send("Hello World");
});

app.use('/',router);

const PORT =  process.env.PORT || 4000;

app.listen(PORT,function(){
  console.log("Express server is listening on Port %s",PORT)
});
