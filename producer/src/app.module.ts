import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserService],
  providers: [],
})
export class AppModule {}
