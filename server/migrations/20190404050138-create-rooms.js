'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      room_num: {
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
      status: {
        type: Sequelize.BOOLEAN
      },
      hotel_id: {
        type: Sequelize.INTEGER
       // references:{
         // model:'rooms',
          //key:hotel.id,
          //as :hotel_id
        //}
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
    return queryInterface.dropTable('rooms');
  }
};