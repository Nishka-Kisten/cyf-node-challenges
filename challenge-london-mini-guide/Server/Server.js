const express = require('express');
const app= express();
const port = process.env.PORT || 3001;

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

// app.get('/pharmacies', (req, res) => {
//     res.send(Stratford.pharmacies)
// })
app.get('/colleges', (req, res) => {
    res.send(Stratford.colleges)
})

app.get('/doctors', (req, res) => {
    res.send(Stratford.doctors)
})

app.get('/hospitals', (req, res) => {
    res.send(Stratford.hospitals)
})

app.get('/:city/pharmacies', (req, res) => {
let city = req.params.city;
console.log(city);
      if(city === "Harrow"){
   res.send(Harrow.pharmacies)
   }else if(city === "Heathrow"){
      res.send(Heathrow.pharmacies) 
    }else if(city === "Stratford"){
       res.send(Stratford.pharmacies) 
    }else {
        res.send("Something went wrong")
    }
})

app.get('/:city/:category', (req, res) => {
    let city = req.params.city;
    let category = req.params.category;
        if(city === "Harrow"){
            if(category === "Pharmacies"){
                res.send(Harrow.pharmacies)
            }else if(category === "Colleges"){
                res.send(Harrow.colleges)
            } else if(category === "Doctors") {
                res.send(Harrow.doctors)
            }else if(category === "Hospitals"){
                res.send(Harrow.hospitals)
            } else {
                res.send("Something went wrong")
            }
       }else if(city === "Heathrow"){
        if(category === "Pharmacies"){
            res.send(Heathrow.pharmacies)
        }else if(category === "Colleges"){
            res.send(Heathrow.colleges)
        } else if(category === "Doctors") {
            res.send(Heathrow.doctors)
        }else if(category === "Hospitals"){
            res.send(Heathrow.hospitals)
        } else {
            res.send("Something went wrong")
        }
          
        }else if(city === "Stratford"){
            if(category === "Pharmacies"){
                res.send(Stratford.pharmacies)
            }else if(category === "Colleges"){
                res.send(Stratford.colleges)
            } else if(category === "Doctors") {
                res.send(Stratford.doctors)
            }else if(category === "Hospitals"){
                res.send(Stratford.hospitals)
            } else {
                res.send("Something went wrong")
            }
        }else {
            res.send("Something went wrong")
        }
    })
    
    



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})