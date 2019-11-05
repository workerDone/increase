import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<User> {
    return this.userService.findById(id);
  }

  @Delete(':id')
  deleteById(@Param('id') id: number): Promise<DeleteResult> {
    return this.userService.deleteById(id);
  }

  @Post()
  save(@Body() user: User): Promise<User> {
    console.log(user)
    return this.userService.save(user);
  }

  @Put()
  upDate(@Body() user: User): Promise<UpdateResult> {
    console.log(user)
    return this.userService.UpDateById(user.id, user);
  }
}