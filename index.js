const express = require('express');
const morgan = require('morgan');
const app = express();

const loggerMidlleware = (req, res, next) => {
  console.log(req.method, req.path);
  next();
};

const authenticationMidlleware = (req, res, next) => {
  console.log('authentication');
  res.locals.user = { username: 'Woody' };
  next();
};


const getRootHandler = (req, res) => {
  console.log(req.path, req.method, req.query);
  res.sendStatus(200);
};

const getUserHandler = (req, res) => {
  console.log('params:', req.params);
  res.status(400).send({'Dear ${res.local.user.username}! It was a bad request'});
};

const redirectExampleHandler = (req, res) => {
  res.redirect('/');
}

const createIssue = (req, res) => {
  console.log(req.body)
  res.sendStatus(201);
}

app.use(morgan('tiny'));
app.use(express.json());
app.use(loggerMidlleware);
app.use(authenticationMidlleware);
app.get('/', getRootHandler);
app.get('/user/:userId', getUserHandler);
app.get('/redirect-example', redirectExampleHandler)
app.posz('/issue', createIssue);

/* app.get('/', (req, res) => {
  res.sendStatus(200)
});

app.post('/', (req, res) => {
  res.status(201).send('tadaam')
});

app.post('/create', (req, res) => {
  res.sendStatus(201)
}); */

app.listen(3000);
