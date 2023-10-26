import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from '../../../common/dtos/common.input';
import { PostWhereInput } from 'src/models/posts/dtos/where.args';
import { UserWhereInput } from 'src/models/users/dto/where.args';

@InputType()
export class CommentWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class CommentWhereInput
  implements RestrictProperties<CommentWhereInput, Prisma.CommentWhereInput>
{
  id: number;
  text: string;
  postId: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  user: UserWhereInput | null;
  post: PostWhereInput | null;

  @Field(() => [CommentWhereInput], { nullable: true })
  AND: Prisma.CommentWhereInput | Prisma.CommentWhereInput[];
  @Field(() => [CommentWhereInput], { nullable: true })
  NOT: Prisma.CommentWhereInput | Prisma.CommentWhereInput[];
  @Field(() => [CommentWhereInput], { nullable: true })
  OR: Prisma.CommentWhereInput[];
}

@InputType()
export class CommentListRelationFilter {
  @Field(() => CommentWhereInput, { nullable: true })
  every: CommentWhereInput;
  @Field(() => CommentWhereInput, { nullable: true })
  some: CommentWhereInput;
  @Field(() => CommentWhereInput, { nullable: true })
  none: CommentWhereInput;
}

@InputType()
export class CommentRelationFilter {
  @Field(() => CommentWhereInput, { nullable: true })
  is: CommentWhereInput;
  @Field(() => CommentWhereInput, { nullable: true })
  isNot: CommentWhereInput;
}
