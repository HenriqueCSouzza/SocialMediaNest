import { Injectable } from '@nestjs/common';
import { FindManyCommentArgs, FindUniqueCommentArgs } from './dtos/find.args';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateCommentInput } from './dtos/create-comment.input';
import { UpdateCommentInput } from './dtos/update-comment.input';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCommentInput: CreateCommentInput) {
    if (createCommentInput.text.length < 1) {
      throw new Error('O campo text deve conter pelo menos 1 caractere.');
    }

    return this.prisma.comment
      .create({
        data: createCommentInput,
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.error(
          'Ocorreu um erro durante a criação do comentário:',
          error,
        );
        throw error;
      });
  }

  findAll(args: FindManyCommentArgs) {
    return this.prisma.comment
      .findMany(args)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.error(
          'Ocorreu um erro durante a criação do comentário:',
          error,
        );
        throw error; // Se desejar relançar o erro
      });
  }

  findOne(args: FindUniqueCommentArgs) {
    return this.prisma.comment.findUnique(args);
  }

  update(updateCommentInput: UpdateCommentInput) {
    const { id, ...data } = updateCommentInput;
    return this.prisma.comment
      .update({
        where: { id },
        data: data,
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.error(
          'Ocorreu um erro durante a atualização do comentário:',
          error,
        );
        throw error; // Se desejar relançar o erro
      });
  }

  remove(args: FindUniqueCommentArgs) {
    return this.prisma.comment
      .delete(args)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.error(
          'Ocorreu um erro durante a remoção do comentário:',
          error,
        );
        throw error; // Se desejar relançar o erro
      });
  }
}
