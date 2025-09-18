import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { firstValueFrom, Observable } from 'rxjs';

interface User {
  id: number;
  name: string;
  age: number;
}

interface UserService {
  GetFilteredUsers(data: {}): Observable<{ users: User[] }>;
}

@Injectable()
export class AppService implements OnApplicationBootstrap {
  private userService: UserService;

  constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) {}

  onApplicationBootstrap() {
    this.userService = this.client.getService<UserService>('UserService');
    this.logFilteredUsers();
  }

  async logFilteredUsers() {
    try {
      const response = await firstValueFrom(
        this.userService.GetFilteredUsers({}),
      );
      console.log('Filtered Users:', response.users);
    } catch (error) {
      console.error('Error calling GetFilteredUsers:', error);
    }
  }
}
