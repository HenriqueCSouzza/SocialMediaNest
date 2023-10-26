import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { PrismaService } from '../../common/prisma/prisma.service';

describe('UsersResolver', () => {
  let resolver: UsersResolver;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersResolver, UsersService, PrismaService],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should create a user', async () => {
    const createUserInput = {
      name: 'testuser',
      email: 'testuser@example.com',
    };

    const mockUserResponse = {
      id: 1,
      name: createUserInput.name,
      email: createUserInput.email,
      // isAdmin: true,
      // createdAt: new Date(),
      // updatedAt: null,
      // deletedAt: null,
    };

    jest
      .spyOn(service, 'create')
      .mockImplementation(async () => mockUserResponse);

    const result = await resolver.createUser(createUserInput);

    expect(result).toEqual({ id: 1, ...createUserInput });
  });
});
