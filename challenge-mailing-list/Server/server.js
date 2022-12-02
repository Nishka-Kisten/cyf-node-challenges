const express = require('express');

const app = express()
const port = 3000
app.use(express.json());

let data = require('./data.json')

app.get('/lists', (req, res)=> {
const names = data.map(list =>{
 return list.name;
})
if(names.length > 0){
  res.status(200).send(names);
} else{
  res.status(200).send([]);
}

})

// app.get('/lists', (req, res) => {
//   const lists = []

//   const names = data.map((list) => {
//     // console.log(list.name)
//     if (list.name) {
//       lists.push(list.name)
//     } else {
//       console.log("Method Working")
//     }
//   });

//   if (res.status(200)) {
//     res.send(lists)
//   } else {
//     res.send(`${[]} ....`)
//   }
// });

app.get('/lists/:name', (req,res) => {
  let nameId = req.params.name;
  const search = data.find(list => list.name === nameId);
  if(search){
    res.send(list);
    } else{
    res.status(404).send("oh no! An error");
   }
})

// app.get('/lists/:names', (req, res) => {
//   let lists = [],
//   name = req.params.names,
//     nameId = req.params['names'];

//   const search = data.filter((list) => {
//     let check = list.name !== nameId;
//     let new1 = {};
//     console.log(list.name !== nameId)
//     if (!check) {
//       return "Not Found"
//     } else {
//       console.log(list)
//       console.log(new1 += list)
//     }
//   })

//   res.send(new1)

// });

app.delete('/lists/:name', (req,res) => {
  let nameId = req.params.name;
  const notDeleted = data.filter(list => list.name !== nameId);
  let deleteList = data.find(list => list.name === nameId);
  if(!deleteList){
    res.status(404).send("Nothing to Delete")
  } else {
    res.status(200).json({success: true});
  }
  data = notDeleted;
})


app.put('/lists/:names', (req, res) => {
  let lists = [],
    nameId = req.params['names'];

  let newName = {
    "name": `${nameId}`,
    "members": ["me@me.com"]
  }
  // data.find((name) => {

  // })

  // const update = data.filter((list) => {
  //   let check = list.name !== nameId
  //   console.log(list.name !== nameId)
  //   // if (!check) {
  //   //   console.log('half way')

  //   //   // res.status(404).send("Nothing to Delete")
  //   // } else {
  //   //   data.push(newName)
  //   // }
  // })



  res.status(201).json({ success: true })

});

app.listen(port, () => {
  console.log("Server Listing at port", port)
})