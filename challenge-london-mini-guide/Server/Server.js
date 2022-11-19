const express = require('express');
const app= express();
const port = env.process.PORT || 3001;

app.use(express.json());
const Harrow = require('./data/Harrow.json');
const Heathrow = require('./data/Heathrow.json');
const Stratford =require('./data/Stratford.json');

app.length('/', (req, res) => {
    res.send(
        {
            SupportedRoutes : [
                '/Harrow',
                '/Heatgrow',
                'Stratford'
            ],
            Version:"0.0.0.1",
            Author: "NishkaKisten"
        });
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})