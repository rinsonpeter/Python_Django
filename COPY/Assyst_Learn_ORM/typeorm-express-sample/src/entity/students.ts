import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Enrollment} from "./enrollment";

@Entity()
export class Students {

    @PrimaryGeneratedColumn()
    studentid: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    course: string;

    @Column()
    fathername: string;

    @Column()
    photo: string;

    @Column()
    joined: string;

    @Column()
    gender: string;

    @Column()
    dob: string;

    @Column()
    phone: number;

    @Column()
    phonenext: number;

    @Column()
    address: string;

    @Column()
    comments: string;

    @Column()
    statusnow: string;
    
   

    @OneToMany(() => Enrollment, Enrollment => Enrollment.studentid)
    enrollmentid: Enrollment[];


    



}