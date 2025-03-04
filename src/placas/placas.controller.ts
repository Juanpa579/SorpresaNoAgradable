import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlacasService } from './placas.service';
import { CreatePlacaDto } from './dto/create-placa.dto';
import { UpdatePlacaDto } from './dto/update-placa.dto';

@Controller('placas')
export class PlacasController {
  constructor(private readonly placasService: PlacasService) {}

  @Post()
  create(@Body() createPlacaDto: CreatePlacaDto) {
    return this.placasService.create(createPlacaDto);
  }

  @Get()
  findAll() {
    return this.placasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.placasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlacaDto: UpdatePlacaDto) {
    return this.placasService.update(id, updatePlacaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placasService.remove(id);
  }
}