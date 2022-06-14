import camelcaseKeys from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';
import setPostgresDefaultsOnHeroku from './setPostgresDefaultsOnHeroku';

setPostgresDefaultsOnHeroku();

config();

export type Product = {
  id: number;
  quantity: number;
  name: string;
  price: string;
  size: string;
};

// Type needed for the connection function below
declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}
// Connect only once to the database
function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL) {
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.postgresSqlClient) {
      globalThis.postgresSqlClient = postgres();
    }
    sql = globalThis.postgresSqlClient;
  }

  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

// get all the data without sizes
// export async function getProducts() {
//   const products = await sql`
// SELECT * FROM products
//  `;
//   return products;
// }

// get all the data including  sizes
export async function getProducts() {
  const products = await sql`
SELECT
products.id AS id,
products.name AS name,
products.category AS category,
products.color AS color,
products.price AS price,
sizes.size AS size
FROM
products,
products_sizes,
sizes
WHERE
products_sizes.product_id = products.id AND
sizes.id = products_sizes.size_id
 `;
  return camelcaseKeys(products);
}

// // get data of one product
// export async function getProduct(id) {
//   const [product] = await sql`
// SELECT * FROM products
// WHERE id = ${id}
//  `;
//   return product;
// }

// get data of one product with sizes/Join query
export async function getProduct(productId?: number) {
  if (!productId) return undefined;
  const [product] = await sql<[Product | undefined]>`
SELECT
products.id AS id,
products.name AS name,
products.category AS category,
products.color AS color,
products.price AS price,
sizes.size AS size
FROM
products,
products_sizes,
sizes
WHERE
products.id = ${productId} AND
products_sizes.product_id = products.id AND
sizes.id = products_sizes.size_id
 `;
  return product && camelcaseKeys(product);
}

// get all the sizes
export async function getSizes() {
  const sizes = await sql`
SELECT * FROM sizes
 `;
  return sizes;
}
