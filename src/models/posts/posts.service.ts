import { Injectable } from '@nestjs/common';
import { FindManyPostArgs, FindUniquePostArgs } from './dtos/find.args';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CreatePostInput } from './dtos/create-post.input';
import { UpdatePostInput } from './dtos/update-post.input';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createPostInput: CreatePostInput) {
    return await this.prisma.post.create({
      data: createPostInput,
    });
  }

  async findAll(args: FindManyPostArgs) {
    return await this.prisma.post.findMany(args);
  }

  async findOne(args: FindUniquePostArgs) {
    return await this.prisma.post.findUnique(args);
  }

  async update(updatePostInput: UpdatePostInput) {
    const { id, ...data } = updatePostInput;
    return await this.prisma.post.update({
      where: { id },
      data: data,
    });
  }

  async remove(args: FindUniquePostArgs) {
    return await this.prisma.post.delete(args);
  }
}
