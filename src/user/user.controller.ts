import {
  Controller,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { JwtGuard } from '../auth/guard';

@Controller('users')
export class UserController {
  // GET /users/me

  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@Req() req: Request) {
    return { user: req.user };
  }
}