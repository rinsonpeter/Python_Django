import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import {Department} from "./department";
import {Employee} from "./Employee"
import { WorksOn } from "./worksOn";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    pName: string;

    @Column({ type: 'date' })
    startDate: string

    @Column()
    duration: string
    
    @Column()
    budget: number

    @OneToMany(() => WorksOn, WorksOn => WorksOn.WorkProjectR)
    ProjectWorkR: Project[];
    
}
