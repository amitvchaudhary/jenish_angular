import { Component } from '@angular/core';
import { Topping, Pizza } from './core/topping';
import { SIZE, COLOR, TASTE } from './core/enumsList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    console.log(this.pizzaList);
    console.log(this.toppingList);
  }

  pizzaList: Pizza[] = [
    {
      name: 'Italian',
      size: '',
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
      size: '',
      addedToppingList: []
    },
    {
      name: 'Paneer Butter Masala',
      size: '',
      addedToppingList: []
    },
    {
      name: 'Garden Delight',
      size: '',
      addedToppingList: []
    },
    {
      name: 'Margherita',
      size: '',
      addedToppingList: []
    }
  ];

  toppingList: Topping[] = [
    {
      name: 'Pepperoni',
      color: COLOR.RED,

    },
    {
      name: 'Mushroom',
      color: COLOR.BROWN,
    },
    {
      name: 'Olives',
      color: COLOR.BLACK,
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

  orderedPizzaList: Pizza[] = [];

  addPizza(pizza) {
    if (pizza != '') {
      const p = new Pizza();
      p.name = pizza;
      this.pizzaList.push(p);
      console.log(this.pizzaList);
    }
  }

  addTopping(index) {
    this.orderedPizzaList[this.orderedPizzaList.length - 1].addedToppingList.push(this.toppingList[index]);
  }

  addToOrder(index) {
    this.orderedPizzaList.push(this.pizzaList[index]);
    console.log(this.orderedPizzaList);
  }
}