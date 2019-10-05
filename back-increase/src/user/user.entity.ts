import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gender: string;

  @Column('int')
  age: number;
}