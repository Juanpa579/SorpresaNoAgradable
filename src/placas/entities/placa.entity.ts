import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('placa')
export class Placa {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text',{
        default: "JYT579",
        unique: true
    })
    placa:string;

    @Column('text',{
        default: 'marca'
    })
    marca:string;

    @Column('numeric',{
        default: 2025
    })
    modelo:number;

    @Column('text',{
        default: 'blanco'
    })
    color:string;

    @Column('date',{
        default:()=> 'CURRENT_TIMESTAMP'
    })
    fechaIngreso:Date;
}