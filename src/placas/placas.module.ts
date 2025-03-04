import { Module } from '@nestjs/common';
import { PlacasService } from './placas.service';
import { PlacasController } from './placas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Placa } from './entities/placa.entity';

@Module({
  controllers: [PlacasController],
  providers: [PlacasService],
  imports: [TypeOrmModule.forFeature([Placa])],
  exports:[TypeOrmModule]
})
export class PlacasModule {}