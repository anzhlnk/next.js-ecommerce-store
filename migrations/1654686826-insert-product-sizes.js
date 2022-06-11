const productSizes = [
  { product_id: 1, size_id: 1 },
  { product_id: 2, size_id: 3 },
  { product_id: 3, size_id: 6 },
  { product_id: 4, size_id: 3 },
  { product_id: 5, size_id: 1 },
  { product_id: 6, size_id: 5 },
  { product_id: 7, size_id: 1 },
  { product_id: 8, size_id: 2 },
  { product_id: 9, size_id: 4 },
];

exports.up = async (sql) => {
  await sql`
	INSERT INTO products_sizes ${sql(productSizes, 'product_id', 'size_id')}`;
};

exports.down = async (sql) => {
  for (const productSize of productSizes) {
    await sql`
      DELETE FROM
			products_sizes
      WHERE
			product_id = ${productSize.product_id} AND
        size_id = ${productSize.size_id}
    `;
  }
};
