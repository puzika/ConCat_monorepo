import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { SocketModule } from 'src/socket/socket.module';

@Module({
  imports: [DatabaseModule, SocketModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
