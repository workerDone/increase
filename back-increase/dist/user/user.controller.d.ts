import { UserService } from './user.service';
import { User } from './user.entity';
import { DeleteResult } from 'typeorm';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    deleteById(id: number): Promise<DeleteResult>;
    save(user: User): Promise<User>;
}
