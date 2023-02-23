import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Demo {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable:true})
    content: string;
    @Column({nullable:true})
    title:string;
    @Column({nullable:true})
    image_url:string
}