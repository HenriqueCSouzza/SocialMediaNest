import { Injectable } from '@nestjs/common';
import { FindManyCommentArgs, FindUniqueCommentArgs } from './dtos/find.args';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateCommentInput } from './dtos/create-comment.input';
import { UpdateCommentInput } from './dtos/update-comment.input';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCommentInput: CreateCommentInput) {
    if (createCommentInput.text.length < 1) {
      throw new Error('O campo text deve conter pelo menos 1 caractere.');
    }

    return await this.prisma.comment.create({
      data: createCommentInput,
    });
  }

  async findAll(args: FindManyCommentArgs) {
    return await this.prisma.comment.findMany(args);
  }

  async findOne(args: FindUniqueCommentArgs) {
    return await this.prisma.comment.findUnique(args);
  }

  async update(updateCommentInput: UpdateCommentInput) {
    const { id, ...data } = updateCommentInput;
    return await this.prisma.comment.update({
      where: { id },
      data: data,
    });
  }

  async remove(args: FindUniqueCommentArgs) {
    return await this.prisma.comment.delete(args);
  }
}
