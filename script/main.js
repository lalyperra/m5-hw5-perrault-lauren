var pizza = {
  crust: [
      'pan',
      'thin',
      'hand-tossed'
    ],
  cheese: [
      'regular',
      'extra'
    ],
  sauce: [
      'marinara',
      'alfredo',
      'bbq'
    ],
  move: function() {
    console.log(‘Please add pepperoni and sausage’);
    return;
  }
}

  console.log(pizza.crust[0]);
  console.log(pizza.cheese[1]);
  console.log(pizza.sauce[0]);
  console.log(pizza.move());
