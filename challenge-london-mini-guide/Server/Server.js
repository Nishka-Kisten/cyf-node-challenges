const express = require('express');
const app= express();
const port = process.env.PORT || 3001;

app.use(express.json());
const harrow = require('./data/Harrow.json');
const heathrow = require('./data/Heathrow.json');
const stratford =require('./data/Stratford.json');
// let cities = {Harrow: Harrow, Heathrow: Heathrow, Stratford:Stratford};
// let {harrow, heathrow, stratford} = cities;
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
// app.get('/colleges', (req, res) => {
//     res.send(Stratford.colleges)
// })

// app.get('/doctors', (req, res) => {
//     res.send(Stratford.doctors)
// })

// app.get('/hospitals', (req, res) => {
//     res.send(Stratford.hospitals)
// })

    // app.get('/:city/pharmacies', (req, res) => {
    // let city = req.params.city;
    //     if(city === "Harrow"){
    // res.send(Harrow.pharmacies)
    // }else if(city === "Heathrow"){
    //     res.send(Heathrow.pharmacies) 
    //     }else if(city === "Stratford"){
    //     res.send(Stratford.pharmacies) 
    //     }else {
    //         res.send("Something went wrong")
    //     }
    // })
    // app.get("/:city/:category/search", (req,
    //     res) => {
    //     const city = req.params.city;
    //     const category = req.params.category;
    //     const term = req.query.term;
    //     let data = cities[city][category].filter((category) =>
    //       category["name"].toLowerCase().includes(term.toLowerCase())
    //     );
    //     res.status(200).json(data);
    //   });
    app.get('/:city/:category', (req, res) => {
        let city = req.params.city;
        let category = req.params.category;
            if(city.toLowerCase() === "harrow"){
                if(category === "Pharmacies" || category === "pharmacies"){
                    res.send(harrow.pharmacies)
                }else if(category === "Colleges" || category === "colleges" ){
                    res.send(harrow.colleges)
                } else if(category === "Doctors" || category === "doctors") {
                    res.send(harrow.doctorsD)
                }else if(category === "Hospitals" || category === "hospitals"){
                    res.send(harrow.hospitals)
                } else {
                    res.send("Something went wrong")
                }
                // res.send(cities[city][category])
        }else if(city === "Heathrow"){
            if(category === "Pharmacies" || category === "pharmacies"){
                res.send(heathrow.pharmacies)
            }else if(category === "Colleges" || category === "colleges"){
                res.send(heathrow.colleges)
            } else if(category === "Doctors" || category === "doctors") {
                res.send(heathrow.doctors)
            }else if(category === "Hospitals" || category === "hospitals"){
                res.send(heathrow.hospitals)
            } else {
                res.send("Something went wrong")
            }
            
            }else if(city === "Stratford"){
                if(category === "Pharmacies" || category === "pharmacies"){
                    res.send(stratford.pharmacies)
                }else if(category === "Colleges" || category === "colleges"){
                    res.send(stratford.colleges)
                } else if(category === "Doctors" || category === "doctors") {
                    res.send(stratford.doctors)
                }else if(category === "Hospitals" || category === "hospitals"){
                    res.send(stratford.hospitals)
                } else {
                    res.send("Something went wrong")
                }
            }
            else {
                res.send("Something went wrong")
            }
        })
    
    



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})