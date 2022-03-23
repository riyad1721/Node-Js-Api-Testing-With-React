const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors())
app.use(express.json());

const users = [
    { id: 0, name: "riyad", email: "riyad@gmail.com", phone: "12345" },
    { id: 1, name: "rasel", email: "rasel@gmail.com", phone: "12345" },
    { id: 2, name: "shawon", email: "shawon@gmail.com", phone: "12345" },
    { id: 3, name: "onim", email: "onim@gmail.com", phone: "12345" },
]


app.get('/', (req, res) => {
    res.send("welcome to node js");
})

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);

    } else {
        res.send(users);
    }

})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('post hitting', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);

})


app.listen(port, () => {
    console.log('Listening port', port);
})