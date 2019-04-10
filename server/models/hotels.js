'use strict';
module.exports = (sequelize, DataTypes) => {
  const hotels = sequelize.define('hotels', {
    h_name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  hotels.associate = function(models) {
    // associations can be defined here

     // hotels.hasMany(models.rooms,{
      //foreignkey:'hotel_id',
      //as:'x'})
    
  };
  return hotels;
};