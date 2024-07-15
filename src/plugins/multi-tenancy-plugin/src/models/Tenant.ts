import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tenant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}