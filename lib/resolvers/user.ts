import { Arg, Query, Resolver } from "type-graphql";
import db from "../models";
import { User } from "../models/user";

@Resolver(User)
export class UserResolver {
  @Query((returns) => User)
  async user(@Arg("id") id: string) {
    const user = await db.User.findOne({ where: { id } });
    return user.get({ plain: true });
  }

  @Query((returns) => [User])
  async users() {
    const users = await db.User.findAll();
    return users.map((u) => u.get({ plain: true }));
  }
}
