exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("(gen_random_uuid())"));
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.datetime("created_at").defaultTo(knex.fn.now());
    table.datetime("updated_at").defaultTo(knex.fn.now());
    table.datetime("deleted_at");
  });
};

exports.down = async function (knex) {
  await knex.raw("DROP TABLE users CASCADE");
};
