import { Component } from '@angular/core';
import { Topping, Pizza } from './core/topping';
import { SIZE, COLOR } from './core/enumsList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = "PizzaApp";

  selectedPizza: string = "italian"

  ngOnInit() {
    console.log(this.pizzaList);
    console.log(this.toppingList);
  }

  pizzaList: Pizza[] = [
    {
      name: 'Italian',
      size: [SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE],
      isOrdered: true,
      addedToppingList: [
        {
          name: 'Pepperoni',
          color: COLOR.RED,

        },
        {
          name: 'Mushroom',
          color: COLOR.BROWN,
        }
      ]
    },
    {
      name: 'Cheezy7',
      size: [],
      isOrdered: false,
      addedToppingList: []
    },
    {
      name: 'Paneer Butter Masala',
      size: [],
      isOrdered: false,
      addedToppingList: []
    },
    {
      name: 'Garden Delight',
      size: [],
      isOrdered: false,
      addedToppingList: []
    },
    {
      name: 'Margherita',
      size: [],
      isOrdered: false,
      addedToppingList: []
    }
  ];

  toppingList: Topping[] = [
    {
      name: 'Olives',
      color: COLOR.BLACK,
    },
    {
      name: 'Mushroom',
      color: COLOR.BROWN,
    },
    {
      name: 'Pepperoni',
      color: COLOR.RED,

    },
    {
      name: 'Pineapple',
      color: COLOR.YELLOW,
    },
    {
      name: 'Green Pepper',
      color: COLOR.GREEN,
    }
  ];

  orderedPizzaList: Pizza[] = [{
    name: 'Italian',
    size: [SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE],
    isOrdered: true,
    addedToppingList: [
      {
        name: 'Pepperoni',
        color: COLOR.RED,

      },
      {
        name: 'Mushroom',
        color: COLOR.BROWN,
      },
    ]
  }];

  marked = false;

  addPizza(pizza) {
    if (pizza != '') {
      const p = new Pizza();
      p.name = pizza;
      this.pizzaList.push(p);
    }
  }

  addToOrder(index) {
    if (this.pizzaList[index].isOrdered == true) {
      this.orderedPizzaList.push(this.pizzaList[index]);
    }
    else {
      this.orderedPizzaList = this.orderedPizzaList.filter((obj) => this.pizzaList[index].name != obj.name);
    }
  }

  removeFromOrder(index) {
    this.pizzaList.map((pizza) => {
      if (pizza.name === this.orderedPizzaList[index].name) {
        pizza.isOrdered = false;
      }
      return pizza;
    })
    this.orderedPizzaList.splice(index, 1);
  }
}