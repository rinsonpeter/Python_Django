import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";

export class Employes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    designation: string;

    @Column()
    mgr: string;

    @Column()
    hire_date: string;

    @ManyToOne(type => Category, category => category.children)
    @Column()
    department: string;

    
    @Column()
    usertype: string;

    @Column()
    repOfficer: number;


    @Column()
    email: string;

    
    @Column()
    password: string;

    
    @ManyToOne(() => Department, department => department.employes)
    department: Department;


    @OneToMany(() => LeaveRequest, request => request.employe)
    leaverequests: LeaveRequest[];

    



}