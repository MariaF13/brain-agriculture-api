import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { PgRuralProducer } from './rural-producer.entity'

@Entity({ name: 'planted_crops' })
export class PgPlantedCrops {
  @PrimaryGeneratedColumn()
  id_planted_crops: number

  @Column({ type: 'varchar', length: 50, nullable: false })
  name_planted_crops: string

  @ManyToMany(() => PgRuralProducer, producer => producer.planted_crops)
  producers: PgRuralProducer[]

  @CreateDateColumn()
  created_at: Date
}
