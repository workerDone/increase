import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async auth(login: string, password: string): Promise<User> {
        return await this.userRepository.findOne({login, password});
    }


    async save(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findById(id: number): Promise<User> {
        return await this.userRepository.findOne(id);
    }

    async deleteById(id: number): Promise<DeleteResult> {
        return await this.userRepository.delete(id)
    }

    async UpDateById(id: number, user: User): Promise<UpdateResult> {
        return await this.userRepository.update(id, user);
    }
}