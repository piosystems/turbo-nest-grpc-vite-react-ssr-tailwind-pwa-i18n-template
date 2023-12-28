import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { IDENTITY_SERVICE } from './constants';
import { IDENTITY_PACKAGE_NAME } from '@common/hms-lib';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register(
      [
        {
          name: IDENTITY_SERVICE,
          transport: Transport.GRPC,
          options:{
            url: 'localhost:5000',//defaults to localhost:5000
            package: IDENTITY_PACKAGE_NAME,
            protoPath: join(__dirname, "../../proto/identity.proto")
          }
        }
      ]
    )
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
