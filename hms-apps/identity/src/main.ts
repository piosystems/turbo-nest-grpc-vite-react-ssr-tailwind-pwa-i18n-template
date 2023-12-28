import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { IDENTITY_PACKAGE_NAME } from '@common/hms-lib';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: 'localhost:5000', //defaults to localhost:5000.
        protoPath: join(__dirname, './proto/identity.proto'),
        package: IDENTITY_PACKAGE_NAME
      }
    }
  );
  await app.listen();
}
bootstrap();
