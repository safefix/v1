module.exports = function(sequelize, DataTypes) {
    var Tenants = sequelize.define("Tenants", {
      userid: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      userType: DataTypes.STRING,
      timeStamp: DataTypes.STRING,
      projectName: DataTypes.STRING,
      googleDriveUrl: DataTypes.STRING,
      calendly: DataTypes.STRING
    });
    return Tenants;
  };
