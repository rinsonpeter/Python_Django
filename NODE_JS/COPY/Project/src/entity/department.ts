import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Employees} from "./employees";

@Entity()
export class Department {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    photo: string;

    @OneToMany(() => Employees, employees => employees.department)
    employees: Employees[];



}