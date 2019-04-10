const Task = require("../models").customers;
module.exports = {
  create(req, res) {
  return Task
              .create({
               c_name: req.body.name,
               address: req.body.address,
               gender: req.body.gender,
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
    Task.update({c_name: req.body.name,
                 address:req.body.address,
                  gender:req.body.gender},  
       { where: { id: req.params.id}})
       .then (Task=> res.status(200).send("updated successfully a User with id = " + id));
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

            
    /*
            add(req, res) {     
              Task.findAll({
              where:{id:req.params.id}
             })
             .then(() => res.status(200).send("id is present"))
             .catch(error => res.status(200).send("id is not present"));
            },  */
           
           
};
