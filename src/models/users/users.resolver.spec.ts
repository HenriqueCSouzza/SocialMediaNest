import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserInput } from './dto/create-user.input';
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
      id: 1,
      name: 'testuser',
      email: 'testuser@example.com',
      createdAt: new Date('10/22/2023'),
      isAdmin: true,
    };

    jest
      .spyOn(service, 'create')
      .mockImplementation(async (createUserInput: CreateUserInput) => ({
        id: 1,
        createdAt: new Date('10/22/2023'),
        name: createUserInput.name,
        email: createUserInput.email,
        isAdmin: true,
      }));

    const result = await resolver.createUser(createUserInput);

    expect(result).toEqual({ id: 1, ...createUserInput });
  });
});
