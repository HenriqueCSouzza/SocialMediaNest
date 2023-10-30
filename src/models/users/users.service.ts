import { BadRequestException, Injectable } from '@nestjs/common';
import { FindManyUserArgs, FindUniqueUserArgs } from './dto/find.args';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Prisma } from '@prisma/client';
import formatPrismaErrorMessage from '../../utils/formatPrimaError';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserInput: CreateUserInput) {
    try {
      return await this.prisma.user.create({
        data: createUserInput,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code) {
          throw new BadRequestException(
            formatPrismaErrorMessage(error)?.message,
          );
        }
      }

      throw error;
    }
  }

  async list(args: FindManyUserArgs) {
    const items = await this.prisma.user.findMany(args);
    const count = await this.prisma.user.count(args);
    return {
      items,
      total: count,
    };
  }

  async findAll(args: FindManyUserArgs) {
    return await this.prisma.user.findMany(args);
  }

  async findOne(args: FindUniqueUserArgs) {
    return await this.prisma.user.findUnique(args);
  }

  async update(updateUserInput: UpdateUserInput) {
    const { id, ...data } = updateUserInput;
    return await this.prisma.user.update({
      where: { id },
      data: data,
    });
  }

  async remove(args: FindUniqueUserArgs) {
    return await this.prisma.user.delete(args);
  }
}
