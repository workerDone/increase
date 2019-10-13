import { Controller, Get, Param, Post, Body, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { DeleteResult } from 'typeorm';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<User> {
    return this.userService.findById(id);
  }

  @Post(':id')
  deleteById(@Param('id') id: number): Promise<DeleteResult> {
    return this.userService.deleteById(id);
  }

  @Post()
  save(@Body() user: User): Promise<User> {
      console.log(user)
    return this.userService.save(user);
  }
}