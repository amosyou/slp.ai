const { X_OK } = require('constants');
const express = require('express');
const app = express();
var port = process.env.PORT || 4000;
app.use(express.json());
const bodyparser = require('body-parser');
const { syncBuiltinESMExports } = require('module');
const { getSystemErrorMap } = require('util');
const apiKey = 'r7XlPZIKdlJNm6FghcZVV8pvfJRNyB0A6RE7r5lO';
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.post('/calculate', (req, res) => { 
  const { PythonShell } = require('python-shell');
  /*let options = {
    mode: 'text',
    pythonPath: 'python3',
    pythonOptions: ['-u'], // get print results in real-time
    args: [req.body.fileName]
  };
  */
 var p = ""
  const { exec } = require('child_process');

  exec('python3 speechrecognition.py -stt ' + req.body.fileName, (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  p = stdout;
  console.log(p);
});

  /*PythonShell.run('speechrecognition.py', options, function(err, results) {
    if (err) console.log(err);
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
});*/
  
  const cohere = require('cohere-ai'); 
  cohere.init('r7XlPZIKdlJNm6FghcZVV8pvfJRNyB0A6RE7r5lO'); 
  (async () => { 
  await new Promise(r => setTimeout(r, 20000))
      const response = await cohere.classify({ 
      model: 'large', 
      inputs: [p], 
      examples: [{"text": "Red purple orange green yellow", "label": "Incorrect"}, {"text": "The bee is happy.", "label": "Correct"}, {"text": "The bee has wings.", "label": "Correct"}, {"text": "The bee is yellow and black.", "label": "Correct"}, {"text": "The bee is flying.", "label": "Correct"}, {"text": "The bee is smiling.", "label": "Correct"}, {"text": "This is a waving bee.", "label": "Correct"}, {"text": "The background is colorful.", "label": "Correct"}, {"text": "There are bright colors.", "label": "Correct"}, {"text": "It is yellow and black.", "label": "Correct"}, {"text": "The bee has a stinger.", "label": "Correct"}, {"text": "It has six legs.", "label": "Correct"}, {"text": "I like the bee", "label": "Correct"}, {"text": "The bee is winking", "label": "Correct"}, {"text": "The bee’s eyes are closed", "label": "Correct"}, {"text": "The bee has a pointy tail", "label": "Correct"}, {"text": "The bee’s legs are brown", "label": "Correct"}, {"text": "It’s legs are brown", "label": "Correct"}, {"text": "I like the colorful background", "label": "Correct"}, {"text": "The bee has horns", "label": "Correct"}, {"text": "This is a fuzzy bee", "label": "Correct"}, {"text": "I like the bee’s smile", "label": "Correct"}, {"text": "The bee has blue wings", "label": "Correct"}, {"text": "The bee is fuzzy", "label": "Correct"}, {"text": "It has a pointy tail", "label": "Correct"}, {"text": "Her eyes are closed", "label": "Correct"}, {"text": "She is happy", "label": "Correct"}, {"text": "I like the orange background", "label": "Correct"}, {"text": "I don’t like the colors", "label": "Correct"}, {"text": "The red looks pretty", "label": "Correct"}, {"text": "I like the yellow on the bee", "label": "Correct"}, {"text": "Why is the bee smiling", "label": "Correct"}, {"text": "Why is the bee’s eye closed", "label": "Correct"}, {"text": "What’s the bee’s name", "label": "Correct"}, {"text": "It’s yellow", "label": "Correct"}, {"text": "It’s yellow and black", "label": "Correct"}, {"text": "It’s smiling", "label": "Correct"}, {"text": "It has 6 legs", "label": "Correct"}, {"text": "This is a bird.", "label": "Incorrect"}, {"text": "The bee is sad.", "label": "Incorrect"}, {"text": "I like sandwiches.", "label": "Incorrect"}, {"text": "Bee wing to happy.", "label": "Incorrect"}, {"text": "I don’t know.", "label": "Incorrect"}, {"text": "The bee is mad", "label": "Incorrect"}, {"text": "The dog barks", "label": "Incorrect"}, {"text": "Dog Bee We", "label": "Incorrect"}, {"text": "His name is Bob", "label": "Incorrect"}, {"text": "There are two bees", "label": "Incorrect"}, {"text": "What a pretty butterfly", "label": "Incorrect"}, {"text": "The leg is purple", "label": "Incorrect"}] 
    }); 
    let x = `The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`; 
  })(); 
});


app.listen(port, function () { });
