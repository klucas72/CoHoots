// import models
const Comment = require("./Comment");
const Design = require("./Design");
const Image = require("./Image");
const Like = require("./Like");
const User = require("./User");

// comments belong to users
Comment.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

// posts belong to users
Design.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

// likes belong to users
Like.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

// each design has one image
Design.hasOne(Image, {
  foreignKey: "imageId",
  onDelete: "CASCADE",
});

// a design can have many likes through the designId foreign key on model: Like, key: designId
Design.hasMany(Like, {
  foreignKey: "designId",
});

Design.hasMany(Comment, {
  foreignKey: "designId",
});

module.exports = {
  Comment,
  Design,
  Image,
  Like,
  User,
};
