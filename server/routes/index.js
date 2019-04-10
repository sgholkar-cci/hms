const customers = require("../controllers").customers;
const hotels = require("../controllers").hotels;
const rooms = require("../controllers").rooms;
const bookings = require("../controllers").bookings;
const bills = require("../controllers").bills;
//filters objectconst fl1 = require('../controllers').fl1;const fl2 = require('../controllers').fl2;

module.exports = (app) => { 
     app.get("/api", (req, res) => res.status(200).send({ 
     message: "Welcome to the customers API!",  
    }));


    //customers api
    app.post("/api/customers", customers.create);
    app.get("/api/customers", customers.list);
    app.put("/api/customers/:id", customers.update);
    app.delete("/api/customers/:id", customers.destroy);

    //hotels api
    app.post("/api/hotels", hotels.create);
    app.get("/api/hotels", hotels.list);
    app.put("/api/hotels/:id", hotels.update);
    app.delete("/api/hotels/:id", hotels.destroy);

    //rooms api
    app.post("/api/rooms", rooms.create);
    app.get("/api/rooms", rooms.list);
    app.put("/api/rooms/:id", rooms.update);
    app.delete("/api/rooms/:id", rooms.destroy);


    //bookings api
    app.post("/api/bookings", bookings.create);
    app.get("/api/bookings", bookings.list);
    app.delete("/api/bookings/:id", bookings.destroy);

    
    //bills api
    app.post("/api/bills", bills.create);


}