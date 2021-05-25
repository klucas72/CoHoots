const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Like extends Model {}

Like.init(
  {
    designId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "design",
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "like",
  }
);

module.exports = Like;
