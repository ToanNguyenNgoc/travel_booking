import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Demo {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    content: string;
    @Column()
    title:string;
    @Column()
    image_url:string
}