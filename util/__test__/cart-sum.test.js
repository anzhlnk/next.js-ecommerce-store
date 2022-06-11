// Unit: Test cart sum function

function checkCartSum(combinedData) {
  let totalP = 0;
  for (let i = 0; i < combinedData.length; i++) {
    totalP += combinedData[i].quantity * combinedData[i].price;
  }
  return totalP;
}

test('updating quantity in item of cookie', () => {
  const combinedData = [
    {
      id: 1,
      name: 'Cotton long sleeve T-shirt',
      category: 'woman',
      color: 'black',
      price: '34',
      size: 'xs',
      quantity: 2,
    },
    {
      id: 2,
      name: 'Cotton linen-blend T-shirt',
      category: 'woman',
      color: 'grey',
      price: '27',
      size: 'm',
      quantity: 1,
    },
  ];
  // 1. Set the cookie value and test that the value was updated
  expect(checkCartSum(combinedData)).toBe(95);
});
