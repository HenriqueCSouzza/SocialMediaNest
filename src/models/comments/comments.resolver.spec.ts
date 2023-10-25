import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CommentsResolver } from './comments.resolver';
import { CommentsService } from './comments.service';

describe('CommentsResolver', () => {
  let resolver: CommentsResolver;
  let service: CommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentsResolver, CommentsService, PrismaService],
    }).compile();

    service = module.get<CommentsService>(CommentsService);
    resolver = module.get<CommentsResolver>(CommentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should create a comment', async () => {
    const createCommentInput = {
      text: 'Test comment',
      postId: 1,
      userId: 1,
    };
    const mockCommentResponse = {
      id: 1,
      text: 'Test comment',
      postId: 1,
      userId: 1,
    };
    jest
      .spyOn(service, 'create')
      .mockImplementation(async () => mockCommentResponse);

    const result = await resolver.createComment(createCommentInput);

    expect(result).toEqual(mockCommentResponse);
  });

  it('should update a comment', async () => {
    const updateCommentInput = {
      id: 1,
      text: 'Updated comment',
    };
    const mockUpdatedCommentResponse = {
      id: 1,
      text: 'Updated comment',
      postId: 1,
      userId: 1,
    };

    jest
      .spyOn(service, 'update')
      .mockImplementation(async () => mockUpdatedCommentResponse);

    const result = await resolver.updateComment(updateCommentInput);

    expect(result).toEqual(mockUpdatedCommentResponse);
  });

  it('should delete a comment', async () => {
    const commentId = { where: { id: 1 } };
    const mockRemoveCommentResponse = {
      id: 1,
      text: 'Updated comment',
      postId: 1,
      userId: 1,
    };
    jest
      .spyOn(service, 'remove')
      .mockImplementation(async () => mockRemoveCommentResponse);

    const result = await resolver.removeComment(commentId);

    expect(result).toEqual(mockRemoveCommentResponse);
  });

  it('should not create a comment with invalid input', async () => {
    const createCommentInput = {
      text: '',
      postId: 1,
      userId: 1,
    };
    try {
      await expect(resolver.createComment(createCommentInput));
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(
        'O campo text deve conter pelo menos 1 caractere.',
      );
    }
  });

  it('should not update a nonexistent comment', async () => {
    const updateCommentInput = {
      id: 999,
      text: 'Updated comment',
    };

    await expect(resolver.updateComment(updateCommentInput)).rejects.toThrow();
  });
});
