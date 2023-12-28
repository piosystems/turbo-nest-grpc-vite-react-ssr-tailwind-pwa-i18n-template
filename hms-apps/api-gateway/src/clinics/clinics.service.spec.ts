import { Test, TestingModule } from '@nestjs/testing';
import { ClinicsService } from './clinics.service';

describe('ClinicsService', () => {
  let service: ClinicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClinicsService],
    }).compile();

    service = module.get<ClinicsService>(ClinicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
