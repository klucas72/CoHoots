const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Image extends Model {}

Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    designId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "design",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "image",
  }
);

module.exports = Image;
