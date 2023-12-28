import { Module } from '@nestjs/common';
import { ClinicsService } from './clinics.service';
import { ClinicsController } from './clinics.controller';

@Module({
  controllers: [ClinicsController],
  providers: [ClinicsService],
})
export class ClinicsModule {}
