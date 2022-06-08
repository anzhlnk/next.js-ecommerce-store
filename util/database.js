import camelcaseKeys from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

// Connect only once to the database

function connectOneTimeToDatabase() {
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres();
  }
  const sql = globalThis.postgresSqlClient;

  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

// get all the data without sizes
export async function getProducts() {
  const products = await sql`
SELECT * FROM products
 `;
  return products;
}

// get all the data including  sizes
// export async function getProducts() {
//   const products = await sql`
// SELECT
// products.id AS id,
// products.category AS category,
// products.color AS color,
// products.price AS price,
// sizes.size AS size
// FROM
// products,
// products_sizes,
// sizes
// WHERE
// products_sizes.product_id = products.id AND
// sizes.id = products_sizes.size_id
//  `;
//   return camelcaseKeys(products);
// }

// // get data of one product
// export async function getProduct(id) {
//   const [product] = await sql`
// SELECT * FROM products
// WHERE id = ${id}
//  `;
//   return product;
// }

// get data of one product with sizes/Join query
export async function getProduct(tshirtId) {
  const product = await sql`
SELECT
products.id AS id,
products.category AS category,
products.color AS color,
products.price AS price,
sizes.size AS size
FROM
products,
products_sizes,
sizes
WHERE
products.id = ${tshirtId} AND
products_sizes.product_id = products.id AND
sizes.id = products_sizes.size_id
 `;
  return camelcaseKeys(product);
}

// initial hard-coded database
// export const tshirtDataBase = [
//   {
//     id: '1',
//     name: 'Cotton long sleeve T-shirt',
//     category: 'woman',
//     color: 'black',
//     size: ['xs', 's', 'l', 'm'],
//     price: '34',
//   },
//   {
//     id: '2',
//     name: 'Cotton linen-blend T-shirt',
//     category: 'woman',
//     color: 'grey',
//     size: ['s', 'l', 'm', 'xxl'],
//     price: '27',
//   },
//   {
//     id: '3',
//     name: 'Cotton basic  T-shirt',
//     category: 'man',
//     color: 'orange',
//     size: ['xs', 's', 'm', 'xxl'],
//     price: '30',
//   },
//   {
//     id: '4',
//     name: 'Cotton long sleeve T-shirt',
//     category: 'woman',
//     color: 'pink',
//     size: ['m', 'l', 'xxl'],
//     price: '48',
//   },
//   {
//     id: '5',
//     name: 'Essential long sleeve T-shirt',
//     category: 'woman',
//     color: 'red',
//     size: ['xs', 's'],
//     price: '45',
//   },
//   {
//     id: '6',
//     name: 'Cotton linen-blend T-shirt',
//     category: 'man',
//     color: 'black',
//     size: ['m', 'l', 'xl', 'xxl'],
//     price: '28',
//   },
//   {
//     id: '7',
//     name: 'Cotton long-sleeve',
//     category: 'man',
//     color: 'white',
//     size: ['xs', 's', 'm'],
//     price: '31',
//   },
//   {
//     id: '8',
//     name: 'Premium Cotton T-shirt',
//     category: 'man',
//     color: 'orange',
//     size: ['xs', 's', 'm', 'l', 'xxl'],
//     price: '25',
//   },
//   {
//     id: '9',
//     name: 'Ladies`Basic-T-shirt',
//     category: 'woman',
//     color: 'brown',
//     size: ['s', 'l', 'xxl'],
//     price: '30',
//   },
// ];
