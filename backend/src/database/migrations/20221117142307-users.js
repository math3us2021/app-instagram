'use strict';

module.exports = {
   up (queryInterface, Sequelize) {
    const UsersTable = queryInterface.createTable('users',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf:{
        type: Sequelize.STRING,
        allowNull: false
      },
      phone:{
        type: Sequelize.STRING,
        allowNull: false
      },

      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
    }
      ); 
    return UsersTable;

  },

  down: queryInterface => queryInterface.dropTable('users'),
};
