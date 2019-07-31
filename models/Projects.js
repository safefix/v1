module.exports = function(sequelize, DataTypes) {
  const Projects = sequelize.define("Projects", {
    idprojects: DataTypes.STRING,
    projectName: DataTypes.STRING,
    residenceAddr: DataTypes.STRING,
    residenceCity: DataTypes.STRING,
    residenceState: DataTypes.STRING,
    residenceZip: DataTypes.STRING,
    thirdPartyId: DataTypes.STRING,
    repairCategory: DataTypes.STRING,
    repairTimeline: DataTypes.STRING,
    repairDetail: DataTypes.STRING,
    repairComments: DataTypes.STRING,
    submitDate: DataTypes.STRING,
    commentId: DataTypes.STRING,
    ownerId: DataTypes.STRING,
    contractorId: DataTypes.STRING,
    projectState: DataTypes.STRING,
    calendly: DataTypes.STRING,
    tenantId: DataTypes.STRING,
    googleDrive: DataTypes.STRING
  });

  Projects.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Projects.hasMany(models.Comments, {
      onDelete: "cascade"
    });
  };

  return Projects;
};
