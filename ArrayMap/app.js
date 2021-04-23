let food_prices = [
  {
    food: 'apple',
    price: 2.50
  },

  {
    food: 'broccoli',
    price: 1.75
  },

  {
    food: 'pizza',
    price: 5
  },

  {
    food: 'beans',
    price: 0.50
  }
]

const info = document.querySelector('#info')

let details = food_prices.map(function(item) {
  return '<div>' + item.food + '   ' + '$' + item.price.toFixed(2) + '</div>'
});

info.innerHTML = details.join('\n');