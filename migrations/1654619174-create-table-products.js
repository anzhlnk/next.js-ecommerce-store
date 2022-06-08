exports.up = async (sql) => {
  await sql`CREATE TABLE products (
  id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name varchar(50) NOT NULL,
  category varchar(50) NOT NULL,
  color varchar(20) NOT NULL,
  price varchar(10) NOT NULL
  )`;
};

exports.down = async (sql) => {
  await sql`DROP TABLE products`;
};
