const express = require('express');
const app = express();
const arr = [];
const userIndex = 0;



const userCreateHandler = (req, res) => {
  console.log(req.body);
  const arr1 = {
    id: userIndex,
    username: req.body.name,
    email: req.body.email,
    role: req.body.role,
    password: req.body.password,
  }
  arr.push(arr1);
  userIndex++;
  res.status(201).json(arr1);
};

const userShowHandler = (req, res) => {
  for (let user of users) {
    if (user.id === parseInt(req.params.id)) {
      return res.json.user
    }
  }
  res.json({});;
}

const userUpdateHandler = (req, res) => {
  for(user of users) {
    if (user.id === parseInt(req.params.id)) {
      user.name = req.body.name;
      user.username = req.body.username;
      user.email = req.body.email;
      user.password = req.body.password;
      return res.status(203).json(user);
    }
  }
  return res.status(201).json({});
}

const userDeleteHandler = (req, res) => {
  for (let index = 0; index < users.length; index++) {
    let users = user[index];
    if (users.id === parseInt.params.id) {
      users.splice(index, 1);
      return res.status
    }
  }
  res.sendStatus(200);
}

app.post('/user', userCreateHandler);
app.get('/user/:id', userShowHandler);
app.put('/user/:id', userUpdateHandler);
app.delete('/user/:id', userDeleteHandler);

app.listen(3000);
