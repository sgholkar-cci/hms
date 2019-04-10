const bookings = require("../models").booking;
const rooms = require("../models").rooms;
const bills = require("../models").bills;
var bookingid,room_id;
let result=0;
module.exports = {
  create(req, res) {
    room_id=req.body.room_id,
    bookingid=req.body.booking_id;
    bookings.findOne({where:{id:bookingid}})
    .then(bookings =>
      {
        if(bookings)
        {
          let noofbeds=rooms.no_of_beds;
          let date = (((bookings.check_in)-(bookings.check_out))/86400000)*-1;
          rooms.findOne({where:{id:room_id}})
          .then(rooms =>   
            {
              var ac =rooms.A_C
              var premiumval=rooms.premium
              if(rooms)
              {
                if(noofbeds==1)
                {
                  result=1000*ac;                             //to cal ac charges
                  result=result+1000;                         //single bed charges
                  result=result+premiumval*(result/100)*10;   // premium charges
                  result=result*date;                         //num od days he stayed
                  res.send("the total bill is ::  "  +result);
                }
                else 
                {
                  result=1000*ac;                             //to cal ac charges
                  result=result+1600;                         //double bed charges
                  result=result+premiumval*(result/100)*10;   // premium charges
                  result=result*date;                         //num od days he stayed
                  res.send("the total bill is ::  "  +result);
                }
              }
            })
        }
        else
        {
          res.send("booking id is invalid" );
        }
      })
  },
          
};