const tshirtDataBase = [
  {
    id: '1',
    name: 'Cotton long sleeve T-shirt',
    category: 'woman',
    color: 'black',
    price: '34',
  },
  {
    id: '2',
    name: 'Cotton linen-blend T-shirt',
    category: 'woman',
    color: 'grey',
    price: '27',
  },
  {
    id: '3',
    name: 'Cotton basic  T-shirt',
    category: 'man',
    color: 'orange',
    price: '30',
  },
  {
    id: '4',
    name: 'Cotton long sleeve T-shirt',
    category: 'woman',
    color: 'pink',
    price: '48',
  },
  {
    id: '5',
    name: 'Essential long sleeve T-shirt',
    category: 'woman',
    color: 'red',
    price: '45',
  },
  {
    id: '6',
    name: 'Cotton linen-blend T-shirt',
    category: 'man',
    color: 'black',
    price: '28',
  },
  {
    id: '7',
    name: 'Cotton long-sleeve',
    category: 'man',
    color: 'white',
    price: '31',
  },
  {
    id: '8',
    name: 'Premium Cotton T-shirt',
    category: 'man',
    color: 'orange',
    price: '25',
  },
  {
    id: '9',
    name: 'Ladies`Basic-T-shirt',
    category: 'woman',
    color: 'brown',
    price: '30',
  },
];

// //migration start
exports.up = async (sql) => {
  await sql`
INSERT INTO products
${sql(tshirtDataBase, 'name', 'category', 'color', 'price')}
`;
};

exports.down = async (sql) => {
  for (const product of tshirtDataBase) {
    await sql`
DELETE FROM products
WHERE
name = ${product.name} AND
category = ${product.category} AND
color = ${product.color} AND
price = ${product.price}`;
  }
};

// end of migration
