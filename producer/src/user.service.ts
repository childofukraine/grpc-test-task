import { Controller, Injectable } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import * as fs from 'fs';
import * as path from 'path';

interface User {
  id: number;
  name: string;
  age: number;
}

@Controller()
export class UserService {
  private users: User[];

  constructor() {
    const filePath = path.join(__dirname, 'data', 'users.json');
    this.users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }

  @GrpcMethod()
  GetFilteredUsers(): { users: User[] } {
    const filtered = this.users.filter((u) => u.age > 18);
    return { users: filtered };
  }
}
