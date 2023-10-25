import { Test, TestingModule } from '@nestjs/testing';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { PrismaService } from '../../common/prisma/prisma.service';

describe('PostsResolver', () => {
  let resolver: PostsResolver;
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsResolver, PostsService, PrismaService],
    }).compile();

    resolver = module.get<PostsResolver>(PostsResolver);
    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should create a user', async () => {
    const createPostInput = {
      title: 'Title test',
      body: 'Body test',
      published: true,
      authorId: 1,
    };
    const mockResponse = {
      id: 1,
      title: 'Title test',
      body: 'Body test',
      published: true,
      authorId: 1,
    };

    jest.spyOn(service, 'create').mockImplementation(async () => mockResponse);

    const result = await resolver.createPost(createPostInput);

    expect(result).toEqual(mockResponse);
  });
});
