import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import {Department} from "./department";
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

    @ManyToOne(() => Department, department => department.employees)
    department: Department;

    @OneToMany(() => WorksOn, WorksOn => WorksOn.employeeid)
    employeeid: WorksOn[];





    
    
}
