import { Module } from '@nestjs/common';
import { PharmaciesService } from './pharmacies.service';
import { PharmaciesController } from './pharmacies.controller';

@Module({
  controllers: [PharmaciesController],
  providers: [PharmaciesService],
})
export class PharmaciesModule {}
