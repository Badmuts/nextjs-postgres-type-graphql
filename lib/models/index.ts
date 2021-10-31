import "reflect-metadata";
import { Sequelize } from "sequelize-typescript";
import { loadEnvConfig } from "@next/env";

import { User } from "./user";

const dev = process.env.NODE_ENV !== "production";
const { PG_URI } = loadEnvConfig("./", dev).combinedEnv;

let cached = global.pg;
if (!cached) cached = global.pg = {};

let models: any = {};

(function () {
  if (!cached.instance) {
    cached.instance = new Sequelize(PG_URI, {
      define: {
        underscored: true,
        timestamps: true,
        paranoid: true,
      },
      pool: {
        min: 0,
        max: 10,
        acquire: 30000,
        // idle: 1000,
        // evict: 1000,
      },
    });
  }
  const sequelize = cached.instance;

  sequelize.addModels([User]);

  models = Object.assign({}, sequelize.models);

  models.sequelize = sequelize;
  models.Sequelize = Sequelize;

  return models;
})();

export default models;
