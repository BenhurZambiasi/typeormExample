import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { IsEmail, Max, MaxLength, Min, MinLength } from 'class-validator'
import Class from './Class';

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MaxLength(50)
  @MinLength(2, { message: "Digite no mínimo 2 caracteres" })
  name: string;

  @Column()
  @Max(99999, { message: 'digite no máximo 10 dígitos' })
  @Min(10000, { message: "digite no mínimo 6 digitos" })
  key: number;

  @Column()
  @IsEmail()
  email: string;


  @ManyToMany(type => Class)
  @JoinTable()
  classes: Class

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
