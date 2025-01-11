import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class ViewsController {
  @Get()
  root(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', '..', 'views', 'public', 'index.html'));
  }
} 