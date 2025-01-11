import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { JokesModule } from './jokes/jokes.module';
import { ViewsModule } from './views/views.module';

@Module({
  imports: [
    JokesModule,
    ViewsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'views', 'public'),
    }),
  ],
})
export class AppModule {}
