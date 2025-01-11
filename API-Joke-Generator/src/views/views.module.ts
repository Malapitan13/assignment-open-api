import { Module } from '@nestjs/common';
import { ViewsController } from './views.controller';
import { JokesModule } from '../jokes/jokes.module';

@Module({
  imports: [JokesModule],
  controllers: [ViewsController],
})
export class ViewsModule {} 