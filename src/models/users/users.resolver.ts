import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { FindManyUserArgs, FindUniqueUserArgs } from './dto/find.args';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from '../../common/prisma/prisma.service';
import { Post } from '../posts/entity/post.entity';
import { Comment } from '../comments/entity/comment.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') args: CreateUserInput) {
    return await this.usersService.create(args);
  }

  @Query(() => [User], { name: 'users' })
  async findAll(@Args() args: FindManyUserArgs) {
    return await this.usersService.findAll(args);
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args() args: FindUniqueUserArgs) {
    return await this.usersService.findOne(args);
  }

  @Mutation(() => User)
  async updateUser(@Args('updateUserInput') args: UpdateUserInput) {
    return await this.usersService.update(args);
  }

  @Mutation(() => User)
  async removeUser(@Args() args: FindUniqueUserArgs) {
    return await this.usersService.remove(args);
  }

  @ResolveField(() => [Comment])
  async comments(@Parent() parent: User) {
    return await this.prisma.comment.findMany({ where: { userId: parent.id } });
  }

  @ResolveField(() => [Post])
  async posts(@Parent() parent: User) {
    return await this.prisma.post.findMany({ where: { authorId: parent.id } });
  }
}
