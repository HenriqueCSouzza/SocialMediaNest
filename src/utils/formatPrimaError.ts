import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import prismaClientErrorMessages from 'src/const/prismaClientErrorMessages';

function formatPrismaErrorMessage(error: PrismaClientKnownRequestError) {
  const { name, meta, code, clientVersion } = error;
  const errorMessage: string = prismaClientErrorMessages[code].message || '';

  if (!errorMessage) {
    return {
      message: `Unknown Prisma error with code: ${code}`,
      name,
      meta,
      code,
      clientVersion,
    };
  }

  // Substitui os espaços reservados pelos valores dos campos

  return { message: errorMessage, name, meta, code, clientVersion };
}

export default formatPrismaErrorMessage;
