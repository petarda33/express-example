const express = require('express');
const app = express();
const todos= [];
let todoIndex = 0;

const rootHandler = (req, res) => {

}

const todosHandler = (req, res) => {
  res.json(todos);
};

const todosCreatHandler = (req, res) => {
  console.log(req.body);
  const todo = {
    id: todoIndex,
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
    author: 'anonymus'
  };
  todos.push(todo);
  todoIndex++;
  res.status(201).json(todo);
};

const todosShowHandler = (req, res) => {
  for (let todo of todos) {
    if (todo.id === parseInt(req.params.id)) {
      return res.json(todo);
    }
  }
   res.json({});
};

const todosUpdateHandler = (req, res) => {
  for (let todo of todos) {
    if (todo.id === parseInt(req.params.id)) {
      todo.name = req.body.name;
      todo.description = req.body.description;
      todo.status = req.body.status;
      return res.status(203).json(todo);
    }
  }
  return res.status(200).json({});
};

const todosDeleteHandler = (req, res) => {
  for (let index = 0; index < todos.length; index++) {
    let todo = todos[index];
    if (todo.id === parseInt(req.params.id)) {
      todos.splice(index, 1);
      return res.sendStatus(204);
    }
  }
  res.sendStatus(200);
};



app.use(express.json());
app.get('/todos', todosHandler);
app.post('/todos', todosCreatHandler);
app.get('/todos/:id', todosShowHandler);
app.put('/todos/:id', todosUpdateHandler);
app.delete('/todos/:id', todosDeleteHandler);

app.listen(3030);