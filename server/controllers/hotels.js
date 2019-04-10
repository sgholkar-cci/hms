const Task = require('../models').hotels;
module.exports = {
  create(req, res) {
  return Task
              .create({
               h_name: req.body.name,
               location: req.body.location,
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
    Task.update({h_name: req.body.name,
                 location:req.body.location,
                },  
       { where: { id: req.params.id}})
       .then (Task=> res.status(200).send(" updated successfully with hotel id = " + id));
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