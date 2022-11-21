const express = require('express');
const app= express();
const port = 3001;

app.use(express.json());
const Harrow = require('./data/Harrow.json');
const Heathrow = require('./data/Heathrow.json');
const Stratford =require('./data/Stratford.json');

app.get('/', (req, res) => {
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

app.get('/pharmacies', (req, res) => {
     console.log()
    res.send(Stratford.pharmacies)
})
app.get('/colleges', (req, res) => {
    res.send(Stratford.colleges)
})

app.get('/doctors', (req, res) => {
    res.send(Stratford.doctors)
})

app.get('/hospitals', (req, res) => {
    res.send(Stratford.hospitals)
})

// app.get('/:city/pharmacies', (req, res) => {

//    if(Harrow){
//     res.send(Harrow.pharmacies)
//    }else if(Heathrow){
//         res.send(Heathrow.pharmacies) 
//     }else{
//         res.send(Stratford.pharmacies) 
//     }
// })


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})