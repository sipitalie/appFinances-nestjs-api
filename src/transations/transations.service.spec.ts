import { Test, TestingModule } from '@nestjs/testing';
import { TransationsService } from './transations.service';

describe('TransationsService', () => {
  let service: TransationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransationsService],
    }).compile();

    service = module.get<TransationsService>(TransationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
