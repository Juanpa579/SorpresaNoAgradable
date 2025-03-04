import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlacaDto } from './dto/create-placa.dto';
import { UpdatePlacaDto } from './dto/update-placa.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Placa } from './entities/placa.entity';

@Injectable()
export class PlacasService {
  constructor(
    @InjectRepository(Placa)
    private placasRepository: Repository<Placa>,
  ) {}

  async create(createPlacaDto: CreatePlacaDto) {
    const newPlaca = this.placasRepository.
    create(createPlacaDto);
    await this.placasRepository.save(newPlaca);
    return newPlaca;
  }

  findAll() {
    const placas = this.placasRepository.find({});
    return placas;
  }

  findOne(id: string) {
    const placa = this.placasRepository.findOneBy({id:id});
    if (!placa) {
      throw new NotFoundException(`Placa ${id} no encontrada`);
    }
    return placa;
  }

  async update(id: string, updatePlacaDto: UpdatePlacaDto) {

    const placa=await this.placasRepository.preload({id:id,...updatePlacaDto});
    if(!placa){
      throw new NotFoundException(`Placa ${id} no encontrada`);
    }
    await this.placasRepository.save(placa);
    return placa;
  }

  remove(id: string) {
    const placa = this.findOne(id);
    this.placasRepository.delete({id:id})
    return placa;
  }
}