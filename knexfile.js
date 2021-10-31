const { loadEnvConfig } = require("@next/env");

const dev = process.env.NODE_ENV !== "production";
const { PG_URI } = loadEnvConfig("./", dev).combinedEnv;

module.exports = {
  client: "pg",
  connection: PG_URI,
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
  pool: {
    min: 0,
    max: 10,
    createTimeoutMillis: 30000,
    acquireTimeoutMillis: 30000,
    idleTimeoutMillis: 1000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 100,
    propagateCreateError: true,
  },
};
