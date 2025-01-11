import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Joke } from './interfaces/joke.interface';

@Injectable()
export class JokesService {
  private readonly baseUrl = 'https://v2.jokeapi.dev';

  constructor(private httpService: HttpService) {}

  getRandomJoke(): Observable<Joke> {
    return this.httpService
      .get<Joke>(`${this.baseUrl}/joke/Any`)
      .pipe(
        map((response: AxiosResponse<Joke>) => response.data),
        catchError(error => {
          return throwError(() => new Error('Failed to fetch joke'));
        }),
      );
  }

  getJokesByCategory(category: string): Observable<Joke> {
    return this.httpService
      .get<Joke>(`${this.baseUrl}/joke/${category}`)
      .pipe(
        map((response: AxiosResponse<Joke>) => response.data),
        catchError(error => {
          return throwError(() => new Error(`Failed to fetch ${category} joke`));
        }),
      );
  }
} 