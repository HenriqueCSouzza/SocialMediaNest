import { Test, TestingModule } from '@nestjs/testing';
import { CommentsResolver } from './comments.resolver';
import { CommentsService } from './comments.service';
import { PrismaService } from '../../common/prisma/prisma.service';

describe('UsersResolver', () => {
  let resolver: CommentsResolver;
  let service: CommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentsResolver, CommentsService, PrismaService],
    }).compile();

    resolver = module.get<CommentsResolver>(CommentsResolver);
    service = module.get<CommentsService>(CommentsService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should create a user', async () => {
    const createCommentInput = {
      text: 'teste comentario',
      postId: 1,
      userId: 1,
    };
    const mockResponse = {
      id: 3,
      text: 'teste comentario',
      postId: 1,
      userId: 1,
    };
    const result = await resolver.createComment(createCommentInput);

    jest
      .spyOn(service, 'create')
      .mockImplementation(async (createCommentInput) => ({
        postId: createCommentInput.postId,
        text: createCommentInput.text,
        userId: createCommentInput.userId,
        id: 3,
      }));

    expect(result).toEqual(mockResponse);
  });
});
