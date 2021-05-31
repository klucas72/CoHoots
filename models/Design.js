const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Design extends Model {}

Design.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    data: {
      type: DataTypes.BLOB("long"),
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "design",
  }
);

module.exports = Design;
