'use strict';
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('booking', {
    cust_id: DataTypes.INTEGER,
    hotel_id1: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
    no_of_rooms: DataTypes.INTEGER,
    total_person: DataTypes.INTEGER,
    no_of_adults: DataTypes.INTEGER,
    no_of_children: DataTypes.INTEGER,
    age_of_children: DataTypes.INTEGER,
    check_in: DataTypes.DATE,
    check_out: DataTypes.DATE
  }, {});
  booking.associate = function(models) {
    // associations can be defined here
  };
  return booking;
};