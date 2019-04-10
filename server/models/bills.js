'use strict';
module.exports = (sequelize, DataTypes) => {
  const bills = sequelize.define('bills', {
    cust_id1: DataTypes.INTEGER,
    hotel_id2: DataTypes.INTEGER,
    room_id1: DataTypes.INTEGER,
    booking_id1: DataTypes.INTEGER,
    no_of_beds: DataTypes.INTEGER,
    A_C: DataTypes.BOOLEAN,
    premium: DataTypes.BOOLEAN
  }, {});
  bills.associate = function(models) {
    // associations can be defined here
  };
  return bills;
};