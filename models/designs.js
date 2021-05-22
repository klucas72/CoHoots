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
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "image",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
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