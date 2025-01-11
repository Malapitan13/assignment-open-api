import { Controller, Get, Param } from '@nestjs/common';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Get()
  getRandomJoke() {
    return this.jokesService.getRandomJoke();
  }

  @Get(':category')
  getJokesByCategory(@Param('category') category: string) {
    return this.jokesService.getJokesByCategory(category);
  }
} 