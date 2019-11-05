import { Injectable } from '@nestjs/common';

import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UserService) { }

    async validateUser(login: string, password): Promise<any> {
        const user = await this.usersService.auth(login, password);
        console.log(user, 22222222)
        return null;
      }
}
