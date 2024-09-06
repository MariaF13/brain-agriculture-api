import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'rural_producer'})
export class PgRuralProducer {
    @PrimaryGeneratedColumn()
    id_rural_producer: number

    @Column()
    name_rural_producer: string
}