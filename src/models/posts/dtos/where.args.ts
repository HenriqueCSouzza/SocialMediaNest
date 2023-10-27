import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from '../../../common/dtos/common.input';
import { CommentListRelationFilter } from 'src/models/comments/dtos/where.args';
import { UserWhereInput } from 'src/models/users/dto/where.args';

@InputType()
export class PostWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class PostWhereInput
  implements RestrictProperties<PostWhereInput, Prisma.PostWhereInput>
{
  id: number;
  title: string;
  body: string;
  published: boolean;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  author: (UserWhereInput | null) | (UserWhereInput | null);
  comments: CommentListRelationFilter | null;

  @Field(() => [PostWhereInput], { nullable: true })
  AND: Prisma.PostWhereInput | Prisma.PostWhereInput[];
  @Field(() => [PostWhereInput], { nullable: true })
  NOT: Prisma.PostWhereInput | Prisma.PostWhereInput[];
  @Field(() => [PostWhereInput], { nullable: true })
  OR: Prisma.PostWhereInput[];
}

@InputType()
export class PostListRelationFilter {
  @Field(() => PostWhereInput, { nullable: true })
  every: PostWhereInput;
  @Field(() => PostWhereInput, { nullable: true })
  some: PostWhereInput;
  @Field(() => PostWhereInput, { nullable: true })
  none: PostWhereInput;
}

@InputType()
export class PostRelationFilter {
  @Field(() => PostWhereInput, { nullable: true })
  is: PostWhereInput;
  @Field(() => PostWhereInput, { nullable: true })
  isNot: PostWhereInput;
}
