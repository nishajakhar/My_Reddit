import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({ type: Date })
  createdAt: Date = new Date();

  @Field()
  @Property({ type: Date, onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field()
  @Property()
  username: string;

  @Property()
  password: string;
}
