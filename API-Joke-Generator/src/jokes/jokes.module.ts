import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';

@Module({
  imports: [HttpModule],
  controllers: [JokesController],
  providers: [JokesService],
})
export class JokesModule {} 