const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// get
app.get('/products', (req, res) => {
    res.json({message: "This is the GET product path"});
});

app.get('/users', (req, res) => {
    res.json({message: "This is the GET users path"});
});

// post
app.post('/products', (req, res) => {
    res.json({message: "This is the POST product path and something was added"});
});

app.post('/users', (req, res) => {
    res.json({message: "This is the POST users path and something was added"});
});

// put
app.put('/products', (req, res) => {
    res.json({message: `This is the PUT products path, product ${req.params.id} was updated`});
});

app.put('/users/:id', (req, res) => {
    res.json({message: `This is the PUT users path, user ${req.params.id} was updated`});
});

// patch
app.patch('/products', (req, res) => {
    res.json({message: `This is the PATCH products path, product ${req.params.id} was partially updated`});
});

app.patch('/users/:id', (req, res) => {
    res.json({message: `This is the PATCH users path, user ${req.params.id} was partially updated`});
});

// delete
app.delete('/products', (req, res) => {
    res.json({message: `This is the PATCH products path, product ${req.params.id} was deleted`});
});

app.delete('/users/:id', (req, res) => {
    res.json({message: `This is the PATCH users path, user ${req.params.id} was deleted`});
});

app.listen(PORT, () => {
    console.log(`SHOPLEFT server is running on http://localhost:${PORT}`);
})