module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define("Comments", {
    idcomments: DataTypes.STRING,
    projectName: DataTypes.STRING,
    userId: DataTypes.STRING,
    com00: DataTypes.STRING,
    com01: DataTypes.STRING,
    com02: DataTypes.STRING,
    com03: DataTypes.STRING,
    com04: DataTypes.STRING,
    com05: DataTypes.STRING,
    com06: DataTypes.STRING,
    com07: DataTypes.STRING,
    com08: DataTypes.STRING,
    com09: DataTypes.STRING,
    com10: DataTypes.STRING
  });
  return Comments;
};