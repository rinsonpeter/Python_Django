import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import {Department} from "./department";


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
    
}
