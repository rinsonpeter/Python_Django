import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
 import {Courses} from "./courses";
import {Students} from "./students";


@Entity()
export class Enrollment {

    @PrimaryGeneratedColumn()
    enrollmentid: number;

    @Column()
    fee: string;

    @Column()
    startdate: string;

    @Column()
    enddate: string;


    @ManyToOne(() => Courses, course => course.enrollmentid)
    courseid: Courses;
  
    @ManyToOne(() => Students, student => student.enrollmentid)
    studentid: Students;

}


