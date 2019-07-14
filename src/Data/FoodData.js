export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.jpg",
    section: "Pizza",
    price: 1000
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pizza.jpg",
    section: "Salad",
    price: 1500
  },
  {
    name: "Chicken Pizza",
    img: "/img/pizza.jpg",
    section: "Pizza",
    price: 2
  },
  {
    img: "/img/pizza.jpg",
    name: "Veggie Pizza",
    section: "Drink",
    price: 2
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
