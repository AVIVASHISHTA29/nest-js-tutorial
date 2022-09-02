import { User } from '.prisma/client';
import {
  Controller,
  Get,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  // GET /users/me
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  editUser() {}
}
