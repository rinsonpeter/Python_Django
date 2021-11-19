import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, Unique} from "typeorm";
import {Department} from "./department";
import {Employee} from "./Employee"
import {Project} from "./Project"

@Entity()
@Unique(["WorkProjectR", "WorkEmpR"])
export class WorksOn {

    @PrimaryGeneratedColumn()
    worksOnId: number;

    @Column()
    hours: number

    //@PrimaryColumn()
    @ManyToOne(() => Project, Project => Project.ProjectWorkR,{onDelete: "CASCADE"})
    WorkProjectR: Project;

    //@PrimaryColumn()
    @ManyToOne(() => Employee, employee => employee.EmpWorkR,{onDelete: "CASCADE"})
    WorkEmpR: Employee;

}







