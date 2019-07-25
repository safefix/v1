use kpg948ajytkqgeon;

CREATE TABLE "owners" (
  "userid" INT NOT NULL AUTO_INCREMENT,
  "username" VARCHAR(16) NOT NULL,
  "email" VARCHAR(255) NULL,
  "password" VARCHAR(32) NOT NULL,
  "userType" VARCHAR(32) NOT NULL,
  "timeStamp" TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (userid)
  );
  
CREATE TABLE "contractors" (
  "userid" INT NOT NULL AUTO_INCREMENT,
  "username" VARCHAR(16) NOT NULL,
  "email" VARCHAR(255) NULL,
  "phone" VARCHAR(16) NOT NULL,
  "password" VARCHAR(32) NOT NULL,
  "userType" VARCHAR(32) NOT NULL,
  "companyName" VARCHAR(255) NOT NULL,
  "companyDetail" VARCHAR(255) NOT NULL,
  "timeStamp" TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (userid)
  );
  
  CREATE TABLE "3rdParties" (
  "userid" INT NOT NULL AUTO_INCREMENT,
  "username" VARCHAR(16) NOT NULL,
  "email" VARCHAR(255) NULL,
  "password" VARCHAR(32) NOT NULL,
  "userType" VARCHAR(32) NOT NULL,
  "timeStamp" TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (userid)
  );

CREATE TABLE "projects" (
  "idprojects" INT NOT NULL AUTO_INCREMENT,
  "projectName" VARCHAR(45) NOT NULL,
  "residenceNumber" VARCHAR(45) NOT NULL,
  "residenceStreet" INT NOT NULL,
  "residenceAddr2" VARCHAR(45) NULL,
  "residenceCity" VARCHAR(45) NOT NULL,
  "residenceState" VARCHAR(45) NOT NULL,
  "residenceZip" VARCHAR(45) NOT NULL,
  "ownerId" VARCHAR(45) NOT NULL,
  "3rdPartyId" VARCHAR(45) NULL,
  "contractorId" VARCHAR(45) NULL,
  "repairCategory" VARCHAR(45) NOT NULL,
  "repairDetail" VARCHAR(255) NULL,
  "repairTimeline" VARCHAR(45) NOT NULL,
  "otherComments" VARCHAR(255) NOT NULL,
  "timeStamp" TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (idprojects)
);
