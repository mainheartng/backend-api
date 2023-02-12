const env = process.env.NODE_ENV || "development";

export default {
  [env]: {
    username: "postgres",
    password: "microvault",
    database: "postgres",
    host: "127.0.0.1",
    dialect: "postgres",
    migrationStorageTableName: "SequelizeMeta",
  },
};
