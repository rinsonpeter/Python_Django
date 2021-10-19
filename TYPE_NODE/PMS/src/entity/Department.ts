import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Employee} from "./employee";

@Entity()
export class Department {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;

    @OneToMany(() => Employee, employees => employees.department)
    employees: Employee[];
}

