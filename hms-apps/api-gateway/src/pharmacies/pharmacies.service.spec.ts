import { Test, TestingModule } from '@nestjs/testing';
import { PharmaciesService } from './pharmacies.service';

describe('PharmaciesService', () => {
  let service: PharmaciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PharmaciesService],
    }).compile();

    service = module.get<PharmaciesService>(PharmaciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
