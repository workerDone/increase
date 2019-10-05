import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    save(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
}
