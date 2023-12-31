import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from '../../../common/dtos/common.input';
import { PostOrderByWithRelationInput } from '../../../models/posts/dtos/order-by.args';
import { UserOrderByWithRelationInput } from '../../../models/users/dto/orderBy.args';

@InputType()
export class CommentOrderByWithRelationInput
  implements
    RestrictProperties<
      CommentOrderByWithRelationInput,
      Prisma.CommentOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder, { nullable: true })
  text: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder, { nullable: true })
  postId: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder, { nullable: true })
  userId: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder, { nullable: true })
  deletedAt: Prisma.SortOrder | Prisma.SortOrderInput;
  @Field(() => PostOrderByWithRelationInput, { nullable: true })
  post: PostOrderByWithRelationInput;
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user: UserOrderByWithRelationInput;
}

@InputType()
export class CommentOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder;
}
