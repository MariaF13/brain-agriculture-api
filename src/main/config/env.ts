export const env = {
    port: process.env.PORT ?? 3000,
    postgres_host: process.env.POSTGRES_HOST ?? 'localhost',
    postgres_port: process.env.POSTGRES_PORT ?? 5432,
    postgres_username: process.env.POSTGRES_USERNAME ?? 'postgres',
    postgres_password: process.env.POSTGRES_PASSWORD ?? 'postgres',
    postgres_database: process.env.POSTGRES_DATABASE ?? 'mydatabase',
    postgres_synchronize: handleBoolean(process.env.POSTGRES_SYNCHRONIZE),
    postgres_logging: handleBoolean(process.env.POSTGRES_LOGGING)
  }
  
  function handleBoolean(
    env_variable: string | undefined,
    default_value: boolean = true
  ): boolean {
    if (!env_variable) {
      return default_value
    } else {
      return env_variable === 'true'
    }
  }
  