import { Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('/:id')
  findAll(
    @Param() param,
  ): string {
    return param;
  }

  // @Post()
  // signIn(){

  // }

  // @Put()
  // put(){

  // }

  // @Delete()
  // delete(){
    
  // }
}
