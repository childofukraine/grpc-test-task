import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'producer:50051',
          package: 'users',
          protoPath: join(__dirname, '..', 'users.proto'),
        },
      },
    ]),
  ],
  providers: [AppService],
})
export class AppModule {}
