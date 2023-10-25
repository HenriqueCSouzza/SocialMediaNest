import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './entity/post.entity';
import { FindManyPostArgs, FindUniquePostArgs } from './dtos/find.args';
import { CreatePostInput } from './dtos/create-post.input';
import { UpdatePostInput } from './dtos/update-post.input';
import { PrismaService } from '../../common/prisma/prisma.service';
import { User } from '../users/entities/user.entity';
import { Comment } from '../comments/entity/comment.entity';

@Resolver(() => Post)
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Post)
  async createPost(@Args('createPostInput') args: CreatePostInput) {
    return await this.postsService.create(args);
  }

  @Query(() => [Post], { name: 'posts' })
  async findAll(@Args() args: FindManyPostArgs) {
    return await this.postsService.findAll(args);
  }

  @Query(() => Post, { name: 'post' })
  async findOne(@Args() args: FindUniquePostArgs) {
    return await this.postsService.findOne(args);
  }

  @Mutation(() => Post)
  async updatePost(@Args('updatePostInput') args: UpdatePostInput) {
    return await this.postsService.update(args);
  }

  @Mutation(() => Post)
  async removePost(@Args() args: FindUniquePostArgs) {
    return await this.postsService.remove(args);
  }

  @ResolveField(() => User)
  async author(@Parent() parent: Post) {
    return await this.prisma.user.findUnique({
      where: { id: parent.authorId },
    });
  }

  @ResolveField(() => [Comment])
  async comments(@Parent() parent: Post) {
    return await this.prisma.comment.findMany({ where: { postId: parent.id } });
  }
}
