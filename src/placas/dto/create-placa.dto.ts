import { IsInt, IsNumber, IsString, MaxLength } from "class-validator";

export class CreatePlacaDto {
    @IsString()
    @MaxLength(10)
    readonly placa: string;
    @IsString()
    @MaxLength(50)
    readonly marca: string;
    @IsNumber()
    readonly modelo: number;
    @IsString()
    @MaxLength(30)
    readonly color: string;
    fechaIngreso?: Date;
}
