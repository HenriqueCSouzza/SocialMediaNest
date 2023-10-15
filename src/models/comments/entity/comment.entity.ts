import { ObjectType } from '@nestjs/graphql';
import { Comment as CommentType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Comment implements RestrictProperties<Comment, CommentType> {
  id: number;
  text: string;
  postId: number;
  userId: number;
}
