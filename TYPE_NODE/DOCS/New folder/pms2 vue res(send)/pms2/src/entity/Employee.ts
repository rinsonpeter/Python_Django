import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Department } from "./Department";
import { WorksOn } from "./worksOn";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    designation: string;

    @Column({ type: 'date' })
    hireDate: string

    @Column()
    salary: number
    
    @Column()
    comments: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    usertype: string

    @ManyToOne(()=> Department, department => department.employeesR)
    departmentR: Department;

    @OneToMany(() => WorksOn, WorksOn => WorksOn.WorkEmpR)
    EmpWorkR: WorksOn[];

}
