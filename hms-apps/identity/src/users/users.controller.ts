import { Controller } from '@nestjs/common';
//import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
//import { CreateUserDto } from './dto/create-user.dto';
//import { UpdateUserDto } from './dto/update-user.dto';
import { UsersServiceController, CreateUserDto, UpdateUserDto, UsersServiceControllerMethods, FindOneUserDto, PaginationDto, FindOneUserByPrimaryEmailAddressDto } from '@common/hms-lib';
import { Observable } from 'rxjs';

@Controller()
@UsersServiceControllerMethods()
export class UsersController implements UsersServiceController {
  constructor(private readonly usersService: UsersService) {}

  createUser(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  findAllUsers() {
    return this.usersService.findAll();
  }

  findOneUser(findOneUserDto: FindOneUserDto) {
    return this.usersService.findOne(findOneUserDto.id);
  }

  updateUser(updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  removeUser(findOneUserDto: FindOneUserDto) {
    return this.usersService.remove(findOneUserDto.id);
  }

  queryUsers(paginationDtoStream: Observable<PaginationDto>) {
    return this.usersService.queryUsers(paginationDtoStream);
      
  }

  findOneUserByPrimaryEmailAddress(findOneUserByPrimaryEmailAddressDto: FindOneUserByPrimaryEmailAddressDto){
    return this.usersService.findOneUserByPrimaryEmailAddress(findOneUserByPrimaryEmailAddressDto.primaryEmailAddress);
  }
}
