import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  BoolFilter,
  RestrictProperties,
  StringFilter,
} from '../../../common/dtos/common.input';
import { CommentOrderByRelationAggregateInput } from '../../../models/comments/dtos/order-by.args';
import { PostOrderByRelationAggregateInput } from '../../../models/posts/dtos/order-by.args';

@InputType()
export class UserOrderByWithRelationInput
  implements
    RestrictProperties<
      UserOrderByWithRelationInput,
      Prisma.UserOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder, { nullable: false })
  id: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder, { nullable: true })
  name: Prisma.SortOrder;
  @Field(() => StringFilter, { nullable: true })
  email: Prisma.SortOrder;
  @Field(() => BoolFilter, { nullable: true })
  isAdmin: Prisma.SortOrder | Prisma.SortOrderInput;
  @Field(() => PostOrderByRelationAggregateInput, { nullable: true })
  posts: PostOrderByRelationAggregateInput;
  @Field(() => CommentOrderByRelationAggregateInput, { nullable: true })
  comments: CommentOrderByRelationAggregateInput;
}

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder;
}
