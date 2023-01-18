import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: { // TO-DO: make this and docker-compose.yml depend on .env and not hard-coded keys
      host: "localhost",
      port: 5432,
      user: "users-crud",
      password: "users-crud",
      database: "user-crud"
    }
  }
};

module.exports = config;
