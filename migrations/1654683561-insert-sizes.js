const allSizes = [
  { size: 'xs' },
  { size: 's' },
  { size: 'm' },
  { size: 'l' },
  { size: 'xl' },
  { size: 'xxl' },
];

exports.up = async (sql) => {
  await sql`
INSERT INTO sizes ${sql(allSizes, 'size')}`;
};

exports.down = async (sql) => {
  for (const size of allSizes) {
    await sql`
      DELETE FROM
			sizes
      WHERE
        size = ${size.size}
    `;
  }
};
