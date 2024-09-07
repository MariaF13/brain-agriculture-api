import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { PgPlantedCrops } from './planted-crops.entity'

@Entity({ name: 'rural_producer' })
export class PgRuralProducer {
  @PrimaryGeneratedColumn()
  id_rural_producer: number

  @Column({ nullable: true, default: null })
  cpf?: string

  @Column({ nullable: true, default: null })
  cnpj?: string

  @Column({ type: 'varchar', length: 100, nullable: false })
  name_rural_producer: string

  @Column({ type: 'varchar', length: 100, nullable: false })
  name_farm: string

  @Column({ type: 'varchar', length: 50, nullable: false })
  city: string

  @Column({ type: 'varchar', length: 50, nullable: false })
  state: string

  @Column({ type: 'float' })
  total_area_hectares: number

  @Column({ type: 'float' })
  arable_area_hectares: number

  @Column({ type: 'float' })
  vegetation_area_hectares: number

  // Relacionamento muitos-para-muitos com PgPlantedCrops
  @ManyToMany(() => PgPlantedCrops, { cascade: true })
  @JoinTable({
    name: 'rl_rural_producer_planted_crops', // Nome da tabela de junção
    joinColumn: { name: 'id_rural_producer' }, // Coluna que referencia o produtor rural
    inverseJoinColumn: { name: 'id_planted_crops' } // Coluna que referencia as culturas plantadas
  })
  planted_crops: PgPlantedCrops[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
