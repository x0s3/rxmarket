import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver('auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('login')
  async login(@Args({ transform: (r: any) => ({ ...r.authLoginInput }) })
  req: {
    email: string;
    password: string;
  }) {
    return this.authService.login(req);
  }
}
