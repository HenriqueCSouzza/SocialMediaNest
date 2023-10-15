import { BadRequestException, Injectable } from '@nestjs/common';
import { FindManyUserArgs, FindUniqueUserArgs } from './dto/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Prisma } from '@prisma/client';
import formatPrismaErrorMessage from 'src/utils/formatPrimaError';

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

  findAll(args: FindManyUserArgs) {
    return this.prisma.user.findMany(args);
  }

  findOne(args: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(args);
  }

  update(updateUserInput: UpdateUserInput) {
    const { id, ...data } = updateUserInput;
    return this.prisma.user.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueUserArgs) {
    return this.prisma.user.delete(args);
  }
}
