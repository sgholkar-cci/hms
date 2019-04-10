const Task = require('../models').rooms;
module.exports = {
  create(req, res) {
  return Task
              .create({
               room_num: req.body.room_number,
               no_of_beds: req.body.no_of_beds,
               A_C: req.body.A_C,
               premium:req.body.premium,
               status:req.body.status,
               hotel_id:req.body.hotel_id,
              })
              .then(Task => res.status(201).send(Task))
              .catch(error => res.status(400).send(error));
  },
  list(req, res) {    
  return Task        
  .findAll().then(Task => {res.send(Task); });
   },

    update(req, res) { 
    const id = req.params.id;        
    Task.update({  room_num: req.body.room_number,
                   no_of_beds: req.body.no_of_beds,
                   A_C: req.body.A_C,
                   premium:req.body.premium,
                   status:req.body.status,
                   hotel_id:req.body.hotel_id,},  
       { where: { id: req.params.id}})
       .then (Task=> res.status(200).send("updated successfully a room details with room id = " + id));
         //.catch(error=>res.status(400).send("customer is not present with id = " + id));
              },

   destroy(req, res) {
              Task.destroy({
              where :{
              id:req.params.id
              }
              })
              .then(() =>res.status(200).send("deleted"))
              .catch(error => res.status(400).send(error));
              }, 
           
           
};