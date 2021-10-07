import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Employees} from "./employee";


@Entity()
export class Department {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;

    @OneToMany(() => Employees, employees => employees.department)
    employees: Employees[];



}