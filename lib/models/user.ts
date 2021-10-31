import {
  Column,
  Default,
  IsEmail,
  IsUUID,
  Length,
  Model,
  PrimaryKey,
  Sequelize,
  Table,
  Unique,
} from "sequelize-typescript";
import { Field, ID, ObjectType } from "type-graphql";

@Table
@ObjectType()
export class User extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Default(() => Sequelize.literal("gen_random_uuid()"))
  @Field((type) => ID)
  @Column
  id: string;

  @Length({ min: 2 })
  @Field()
  @Column
  name: string;

  @Unique
  @IsEmail
  @Field()
  @Column
  email: string;
}
