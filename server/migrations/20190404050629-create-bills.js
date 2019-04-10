'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cust_id1: {
        type: Sequelize.INTEGER
      },
      hotel_id2: {
        type: Sequelize.INTEGER
      },
      room_id1: {
        type: Sequelize.INTEGER
      },
      booking_id1: {
        type: Sequelize.INTEGER
      },
      no_of_beds: {
        type: Sequelize.INTEGER
      },
      A_C: {
        type: Sequelize.BOOLEAN
      },
      premium: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bills');
  }
};