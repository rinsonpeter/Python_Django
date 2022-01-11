import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import {Department} from "./department";
import {Employee} from "./Employee"
import {Project} from "./Project"

@Entity()
export class WorksOn {

    @PrimaryGeneratedColumn()
    worksOnId: number;

    @Column()
    hours: number

    @ManyToOne(() => Project, Project => Project.id)
    Projectid: Project;

    @ManyToOne(() => Employee, employee => employee.id)
    employeeid: Employee;


}







