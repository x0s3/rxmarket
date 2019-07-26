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

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email).toPromise();
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: LoginCredentials) {
    const payload = { email: user.email, password: user.password };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
