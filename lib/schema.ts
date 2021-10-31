import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import { UserResolver } from "./resolvers/user";

const schema = buildSchemaSync({
  authChecker: () => true,
  resolvers: [UserResolver],
  emitSchemaFile: true,
  nullableByDefault: true,
});

export default schema;
