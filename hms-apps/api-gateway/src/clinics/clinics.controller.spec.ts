import { Test, TestingModule } from '@nestjs/testing';
import { ClinicsController } from './clinics.controller';
import { ClinicsService } from './clinics.service';

describe('ClinicsController', () => {
  let controller: ClinicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClinicsController],
      providers: [ClinicsService],
    }).compile();

    controller = module.get<ClinicsController>(ClinicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
