import { Test, TestingModule } from '@nestjs/testing';
import { PharmaciesController } from './pharmacies.controller';
import { PharmaciesService } from './pharmacies.service';

describe('PharmaciesController', () => {
  let controller: PharmaciesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PharmaciesController],
      providers: [PharmaciesService],
    }).compile();

    controller = module.get<PharmaciesController>(PharmaciesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
