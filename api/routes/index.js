var express = require('express');
var router = express.Router();
var app = express();
var port = process.env.PORT || 4001;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.post('/calculate', function (req, res) {

  const PythonShell = require('python-shell').PythonShell;

  PythonShell.run('routes/a.py', null, function (err) {
    if (err) throw err;
    console.log('finished');
    });

  let text = req.body.payload.text;

  let calculationPayload = {
    ans: "",
  }

  const cohere = require("cohere-ai");
  cohere.init("knPvUVwmmMv2fn0ipvFRSpfXE4zl5KrTIATX7fFM");
  (async () => { 
    const response = await cohere.classify( 
      model='large', 
      inputs=[text], 
      examples=[Example("Red purple orange green yellow", "Incorrect"), Example("The bee is happy.", "Correct"), Example("The bee has wings.", "Correct"), Example("The bee is yellow and black.", "Correct"), Example("The bee is flying.", "Correct"), Example("The bee is smiling.", "Correct"), Example("This is a waving bee.", "Correct"), Example("The background is colorful.", "Correct"), Example("There are bright colors.", "Correct"), Example("It is yellow and black.", "Correct"), Example("The bee has a stinger.", "Correct"), Example("It has six legs.", "Correct"), Example("I like the bee", "Correct"), Example("The bee is winking", "Correct"), Example("The bee’s eyes are closed", "Correct"), Example("The bee has a pointy tail", "Correct"), Example("The bee’s legs are brown", "Correct"), Example("It’s legs are brown", "Correct"), Example("I like the colorful background", "Correct"), Example("The bee has horns", "Correct"), Example("This is a fuzzy bee", "Correct"), Example("I like the bee’s smile", "Correct"), Example("The bee has blue wings", "Correct"), Example("The bee is fuzzy", "Correct"), Example("It has a pointy tail", "Correct"), Example("Her eyes are closed", "Correct"), Example("She is happy", "Correct"), Example("I like the orange background", "Correct"), Example("I don’t like the colors", "Correct"), Example("The red looks pretty", "Correct"), Example("I like the yellow on the bee", "Correct"), Example("Why is the bee smiling", "Correct"), Example("Why is the bee’s eye closed", "Correct"), Example("What’s the bee’s name", "Correct"), Example("It’s yellow", "Correct"), Example("It’s yellow and black", "Correct"), Example("It’s smiling", "Correct"), Example("It has 6 legs", "Correct"), Example("This is a bird.", "Incorrect"), Example("The bee is sad.", "Incorrect"), Example("I like sandwiches.", "Incorrect"), Example("Bee wing to happy.", "Incorrect"), Example("I don’t know.", "Incorrect"), Example("The bee is mad", "Incorrect"), Example("The dog barks", "Incorrect"), Example("Dog Bee We", "Incorrect"), Example("His name is Bob", "Incorrect"), Example("There are two bees", "Incorrect"), Example("What a pretty butterfly", "Incorrect"), Example("The leg is purple", "Incorrect")]); 
    let x = `The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`
    calculationPayload.ans = x
    console.log(x); 
    
  
    
  })(); 
});


module.exports = router;

app.listen(port, function () { });
