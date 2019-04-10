'use strict';
module.exports = (sequelize, DataTypes) => {
  const customers = sequelize.define('customers', {
    c_name: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {});
  customers.associate = function(models) {
    // associations can be defined here
  };
  return customers;
};