const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");


class Design extends Model { }

Design.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
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
        isDecimal: false,
      },
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,

    }
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
