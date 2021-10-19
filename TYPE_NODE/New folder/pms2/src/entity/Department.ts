import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Employee } from "./Employee";

@Entity()
export class Department {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    location: string;

    @OneToMany(() => Employee, employees => employees.departmentR)
    employeesR: Employee[];

}
