import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize'

export const UserSequelize = sequelize.define(
  'Users',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  
},
  {
    underscored: true,
    modelName: 'Users',
    tableName: 'users',
  },
)




// EmployeeSequelize.aggregate = function(models) {
//   // associations can be defined here
//   EmployeeSequelize.hasMany(models.address,{as: 'address', foreignKey: 'cityId'})
// };


