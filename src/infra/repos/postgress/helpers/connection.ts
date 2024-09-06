import { DataSource } from 'typeorm';
import { env } from '@/main/config/env';

export class PgConnection {
  private static instance?: PgConnection;
  private dataSource: DataSource;

  private constructor() {
    this.dataSource = new DataSource({
      type: 'postgres',
      host: env.postgres_host,
      port: +env.postgres_port,
      username: env.postgres_username,
      password: env.postgres_password,
      database: env.postgres_database,
      entities: ['src/**/*.entity.ts', 'dist/**/*.entity.js'],
      synchronize: env.postgres_synchronize,
      logging: env.postgres_logging
    });
  }

  static getInstance(): PgConnection {
    if (PgConnection.instance === undefined) {
      PgConnection.instance = new PgConnection();
    }
    return PgConnection.instance;
  }

  connect(): DataSource {
    if (this.dataSource === undefined) {
      this.dataSource = new DataSource({
        type: 'postgres',
        host: env.postgres_host,
        port: +env.postgres_port,
        username: env.postgres_username,
        password: env.postgres_password,
        database: env.postgres_database,
        entities: ['src/**/*.entity.ts', 'dist/**/*.entity.js'],
        synchronize: env.postgres_synchronize,
        logging: env.postgres_logging
      })
    }
    return this.dataSource
  }

  async disconnect(): Promise<void> {
    try {
      await this.dataSource.destroy();
      console.log('Database connection closed.');
    } catch (error) {
      console.error('Error closing database connection:', error);
      throw error;
    }
  }

  getConnection(): DataSource {
    return this.dataSource;
  }
}
