import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Employes} from "./employes";

@Entity()
export class LeaveRequest {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Employes, employes => employes.leaverequests)              
    employe: Employes;

    @Column()
    leaveType: string;

    @Column()
    fromDate: string;

    @Column()
    toDate: string;

    @Column()
    reason: string;

    
    @Column({nullable: true})
    
    file: string;

    @Column()
    applyDate: string;


    @Column()
    days: number;

    
    @Column({default: "Pending"})
    status: string;

    
    @Column({nullable: true})
    
    rejectReason: string;
       



}