const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World')
})

const users = [
    { id: 1, name: 'sabana', email: ' sabana@gmail.com', phone: '01700000' },
    { id: 2, name: 'Shabnur', email: ' Shabnur@gmail.com', phone: '01700000' },
    { id: 3, name: 'Suchorita', email: ' Suchorita@gmail.com', phone: '01700000' },
    { id: 4, name: 'Suchonda', email: ' Suchonda@gmail.com', phone: '01700000' },
    { id: 5, name: 'Layla', email: ' Layla@gmail.com', phone: '01700000' },
    { id: 6, name: 'Srabonti', email: ' Srabonti@gmail.com', phone: '01700000' },
    { id: 7, name: 'Sultana', email: ' Sultana@gmail.com', phone: '01700000' }
]



app.get('/users', (req, res) => {

    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const user = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(user)

    }
    else {
        res.send(users)
    }

})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id == id)
    res.send(user);
})

app.post('/user', (req, res) => {

    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})


app.listen(port, () => {
    console.log('This is port', port)
})