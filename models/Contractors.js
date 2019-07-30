module.exports = function(sequelize, DataTypes) {
    var Contractors = sequelize.define("Contractors", {
      userid: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      companyName: DataTypes.STRING,
      proposedPrice: DataTypes.STRING,
      projectTimeframe: DataTypes.STRING,
      projectNotes: DataTypes.STRING,
      userType: DataTypes.STRING,
      timeStamp: DataTypes.STRING,
      projectName: DataTypes.STRING
    });
    return Contractors;
  };
