import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  firstName: string;

  @Column({ default: null })
  lastName: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ default: null })
  gender: string;

  @Column({ default: null })
  age: number;

  @Column({ default: false })
  confirmed: boolean;

  @Column({ default: null })
  login: string;
}