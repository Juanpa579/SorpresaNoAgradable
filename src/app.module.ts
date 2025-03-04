import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacasModule } from './placas/placas.module';

@Module({
  imports: [PlacasModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        autoLoadEntities: true,
        synchronize: true, // Recuerda cambiar a false en producción
      }),
    }),
    PlacasModule,//Configuracion de la base de datos
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
