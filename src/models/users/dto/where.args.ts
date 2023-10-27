import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from '../../../common/dtos/common.input';
import { CommentListRelationFilter } from 'src/models/comments/dtos/where.args';
import { PostListRelationFilter } from 'src/models/posts/dtos/where.args';

@InputType()
export class UserWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class UserWhereInput
  implements RestrictProperties<UserWhereInput, Prisma.UserWhereInput>
{
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  posts: PostListRelationFilter;
  comments: CommentListRelationFilter;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  @Field(() => [UserWhereInput], { nullable: true })
  AND: UserWhereInput | UserWhereInput[];
  @Field(() => [UserWhereInput], { nullable: true })
  OR: UserWhereInput[];
  @Field(() => [UserWhereInput], { nullable: true })
  NOT: UserWhereInput | UserWhereInput[];
  // @Field(() => BoolFilter, { nullable: true })
  // isAdmin: BoolFilter
  // @Field(() => IntFilter, { nullable: true })
  // id: IntFilter
  // @Field(() => StringFilter, { nullable: true })
  // email: StringFilter
  // @Field(() => DateTimeFilter, { nullable: true })
  // createdAt: DateTimeFilter
  // @Field(() => StringFilter, { nullable: true })
  // name: StringFilter
  // @Field(() => [UserWhereInput], { nullable: true })
  // AND: UserWhereInput[]
  // // @Field(() => [UserWhereInput], { nullable: true })
  // // OR: UserWhereInput[]
  // @Field(() => [UserWhereInput], { nullable: true })
  // NOT: UserWhereInput[]
}

@InputType()
export class UserListRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  every: UserWhereInput;
  @Field(() => UserWhereInput, { nullable: true })
  some: UserWhereInput;
  @Field(() => UserWhereInput, { nullable: true })
  none: UserWhereInput;
}

@InputType()
export class UserRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  is: UserWhereInput;
  @Field(() => UserWhereInput, { nullable: true })
  isNot: UserWhereInput;
}
