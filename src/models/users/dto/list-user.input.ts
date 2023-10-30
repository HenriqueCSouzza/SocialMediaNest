import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@ObjectType()
export class UserList {
  @Field(() => [User])
  items: [User];
  total: number;
}
