import { ObjectType } from '@nestjs/graphql';
import { User as UserType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  email: string;
  isAdmin: boolean;
  id: number;
  createdAt: Date;
  name: string;
}
