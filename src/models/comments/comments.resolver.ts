import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { Comment } from './entity/comment.entity';
import { FindManyCommentArgs, FindUniqueCommentArgs } from './dtos/find.args';
import { CreateCommentInput } from './dtos/create-comment.input';
import { UpdateCommentInput } from './dtos/update-comment.input';
import { PrismaService } from '../../common/prisma/prisma.service';
import { User } from '../users/entities/user.entity';
import { Post } from '../posts/entity/post.entity';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Comment)
  async createComment(@Args('createCommentInput') args: CreateCommentInput) {
    return await this.commentsService.create(args);
  }

  @Query(() => [Comment], { name: 'comments' })
  async findAll(@Args() args: FindManyCommentArgs) {
    return await this.commentsService.findAll(args);
  }

  @Query(() => Comment, { name: 'comment' })
  async findOne(@Args() args: FindUniqueCommentArgs) {
    return await this.commentsService.findOne(args);
  }

  @Mutation(() => Comment)
  async updateComment(@Args('updateCommentInput') args: UpdateCommentInput) {
    return await this.commentsService.update(args);
  }

  @Mutation(() => Comment)
  async removeComment(@Args() args: FindUniqueCommentArgs) {
    return await this.commentsService.remove(args);
  }

  @ResolveField(() => User)
  async user(@Parent() parent: Comment) {
    return await this.prisma.user.findUnique({ where: { id: parent.userId } });
  }

  @ResolveField(() => Post)
  async post(@Parent() parent: Comment) {
    return await this.prisma.post.findUnique({ where: { id: parent.postId } });
  }
}
