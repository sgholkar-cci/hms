'use strict';
module.exports = (sequelize, DataTypes) => {
  const rooms = sequelize.define('rooms', {
    room_num: DataTypes.INTEGER,
    no_of_beds: DataTypes.INTEGER,
    A_C: DataTypes.BOOLEAN,
    premium: DataTypes.BOOLEAN,
    status: DataTypes.BOOLEAN,
    hotel_id: DataTypes.INTEGER
  }, {});
  rooms.associate = function(models) {
    // associations can be defined here
  };
  return rooms;
};