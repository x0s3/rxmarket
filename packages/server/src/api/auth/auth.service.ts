import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginCredentials } from 'core/src/interfaces';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email).toPromise();
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(credentials: LoginCredentials) {
    const payload = { ...credentials };
    const user = await this.usersService.findOne(credentials.email).toPromise();

    return {
      access_token: this.jwtService.sign(payload),
      ...user
    };
  }
}
