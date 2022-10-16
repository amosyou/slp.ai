const { X_OK } = require('constants');
var express = require('express');
var router = express.Router();
var app = express();
var port = process.env.PORT || 4001;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.post('/calculate', function (req, res) {
  let text = ""
  const { spawn } = require('child_process');
  const pyProg = spawn('python', ['speechrecognition.py', req]);
  pyProg.stdout.on('data', function(data) {
    text = (data.toString());
  });
  let calculationPayload = {
    ans: "",
  }

  const cohere = require('cohere-ai'); 
cohere.init('{apiKey}'); 
  (async () => { 
    const response = await cohere.classify({ 
      model: 'large', 
      inputs: [text], 
      examples: [{"text": "Red purple orange green yellow", "label": "Incorrect"}, {"text": "The bee is happy.", "label": "Correct"}, {"text": "The bee has wings.", "label": "Correct"}, {"text": "The bee is yellow and black.", "label": "Correct"}, {"text": "The bee is flying.", "label": "Correct"}, {"text": "The bee is smiling.", "label": "Correct"}, {"text": "This is a waving bee.", "label": "Correct"}, {"text": "The background is colorful.", "label": "Correct"}, {"text": "There are bright colors.", "label": "Correct"}, {"text": "It is yellow and black.", "label": "Correct"}, {"text": "The bee has a stinger.", "label": "Correct"}, {"text": "It has six legs.", "label": "Correct"}, {"text": "I like the bee", "label": "Correct"}, {"text": "The bee is winking", "label": "Correct"}, {"text": "The bee’s eyes are closed", "label": "Correct"}, {"text": "The bee has a pointy tail", "label": "Correct"}, {"text": "The bee’s legs are brown", "label": "Correct"}, {"text": "It’s legs are brown", "label": "Correct"}, {"text": "I like the colorful background", "label": "Correct"}, {"text": "The bee has horns", "label": "Correct"}, {"text": "This is a fuzzy bee", "label": "Correct"}, {"text": "I like the bee’s smile", "label": "Correct"}, {"text": "The bee has blue wings", "label": "Correct"}, {"text": "The bee is fuzzy", "label": "Correct"}, {"text": "It has a pointy tail", "label": "Correct"}, {"text": "Her eyes are closed", "label": "Correct"}, {"text": "She is happy", "label": "Correct"}, {"text": "I like the orange background", "label": "Correct"}, {"text": "I don’t like the colors", "label": "Correct"}, {"text": "The red looks pretty", "label": "Correct"}, {"text": "I like the yellow on the bee", "label": "Correct"}, {"text": "Why is the bee smiling", "label": "Correct"}, {"text": "Why is the bee’s eye closed", "label": "Correct"}, {"text": "What’s the bee’s name", "label": "Correct"}, {"text": "It’s yellow", "label": "Correct"}, {"text": "It’s yellow and black", "label": "Correct"}, {"text": "It’s smiling", "label": "Correct"}, {"text": "It has 6 legs", "label": "Correct"}, {"text": "This is a bird.", "label": "Incorrect"}, {"text": "The bee is sad.", "label": "Incorrect"}, {"text": "I like sandwiches.", "label": "Incorrect"}, {"text": "Bee wing to happy.", "label": "Incorrect"}, {"text": "I don’t know.", "label": "Incorrect"}, {"text": "The bee is mad", "label": "Incorrect"}, {"text": "The dog barks", "label": "Incorrect"}, {"text": "Dog Bee We", "label": "Incorrect"}, {"text": "His name is Bob", "label": "Incorrect"}, {"text": "There are two bees", "label": "Incorrect"}, {"text": "What a pretty butterfly", "label": "Incorrect"}, {"text": "The leg is purple", "label": "Incorrect"}] 
    }); 
    let x = `The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`; 
    calculationPayload.ans = x
    res.write(x);
    res.end('end');
  })(); 
});


module.exports = router;

app.listen(port, function () { });
