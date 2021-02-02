import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('password_resets')
export class ResetEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    token: string;
}
