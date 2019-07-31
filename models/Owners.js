module.exports = function(sequelize, DataTypes) {
    var Owners = sequelize.define("Owners", {
      userid: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      userType: DataTypes.STRING,
      timeStamp: DataTypes.STRING,
      projectName: DataTypes.STRING,
      googleDriveUrl: DataTypes.STRING
    });
    return Owners;
  };
