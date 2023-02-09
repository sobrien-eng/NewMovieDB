module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Nu200240853",
    DB: "moviedb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };