import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import {Department} from "./department";
import {Employee} from "./Employee"
import { WorksOn } from "./worksOn";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pName: string;

    @Column({ type: 'date' })
    startDate: string

    @Column()
    duration: string
    
    @Column()
    budget: number

    // @OneToMany(() => Employee, employees => employees.id)
    // employees: Employee[];

    @OneToMany(() => WorksOn, Projectid => Projectid.Projectid)
    Projectid: Project[];




    
}
