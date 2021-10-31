import { ApolloServer } from "apollo-server-micro";

import schema from "../../lib/schema";

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({ schema });
const handler = apolloServer.createHandler({
  path: "/api/graphql",
});
export default handler;
