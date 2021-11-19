import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
 import {Enrollment} from "./enrollment";

@Entity()
export class Courses {

    @PrimaryGeneratedColumn()
    courseid: number;

    @Column()
    course: string;

    @Column()
    duration: string;

    @Column()
    fees: string;

    @Column()
    contact: string;

    @Column()
    email: string;

    @Column()
    status: string;

     @OneToMany(() => Enrollment, enrollment => enrollment.courseid)
    enrollmentid: Enrollment[];
     
}