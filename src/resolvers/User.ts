import { Resolver, Ctx, Arg, Mutation, InputType, Field, ObjectType } from 'type-graphql';
import { User } from '../entities/User';
import { MyContext } from '../types';
import argon from 'argon2';

@InputType()
class UserInput {
  @Field()
  username: string;

  @Field()
  password: string;
}

@ObjectType()
class UserResponse {
  @Field()
  error?: string;

  @Field()
  user?: User;
}

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async register(@Arg('options', () => UserInput) options: UserInput, @Ctx() { em }: MyContext): Promise<UserResponse> {
    const user = await em.findOne(User, { username: options.username });
    if (user)
      return {
        error: 'Username Already Registered',
      };
    const hash = await argon.hash(options.password);
    const userCreate = em.create(User, { username: options.username, password: hash });
    await em.persistAndFlush(userCreate);
    return {
      user: userCreate,
    };
  }

  @Mutation(() => UserResponse)
  async login(@Arg('options', () => UserInput) options: UserInput, @Ctx() { em }: MyContext): Promise<UserResponse> {
    const user = await em.findOne(User, { username: options.username });
    if (!user)
      return {
        error: 'Username or Password Incorrect',
      };
    const valid = await argon.verify(user.password, options.password);
    if (!valid)
      return {
        error: 'Username or Password Incorrect',
      };
    return {
      user: user,
    };
  }
}
