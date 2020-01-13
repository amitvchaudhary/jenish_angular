import { Component } from '@angular/core';
import { Type, Topping } from './core/classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = "PizzaApp";

  ngOnInit() {

  }

  typeList: Type[] = [
    {
      typeName: 'Pizza',
      itemList: [
        {
          itemName: 'Italian',
          itemPrice: 200,
          totalQuantity: 2,
          itemImage: '../assets/images/Pizza/ItalianPizza.jpg',
          quantityList: [
            {
              itemNum: 1,
              itemPrice: 100,
              itemSize: [
                {
                  size: 'small',
                  price: 80,
                },
                {
                  size: 'medium',
                  price: 150,
                },
                {
                  size: 'large',
                  price: 200,
                },
              ],
              toppingList: [
                {
                  for: 'Pizza',
                  name: 'Pepperoni',
                  quantity: 2,
                  price: 20,
                },
                {
                  for: 'Pizza',
                  name: 'Mushroom',
                  quantity: 1,
                  price: 20,
                },
                {
                  for: 'Pizza',
                  name: 'Green Pepper',
                  quantity: 1,
                  price: 20,
                },
              ],
            },
            {
              itemNum: 2,
              itemPrice: 100,
              itemSize: [
                {
                  size: 'small',
                  price: 80,
                },
                {
                  size: 'medium',
                  price: 150,
                },
                {
                  size: 'large',
                  price: 200,
                },
              ],
              toppingList: [
                {
                  for: 'Pizza',
                  name: 'Pepperoni',
                  quantity: 1,
                  price: 20,
                },
                {
                  for: 'Pizza',
                  name: 'Mushroom',
                  quantity: 1,
                  price: 20,
                },
              ],
            },
          ],
        },
        {
          itemName: 'Paneer butter masala',
          itemPrice: 200,
          totalQuantity: 1,
          itemImage: '../assets/images/Pizza/ItalianPizza.jpg',
          quantityList: [
            {
              itemNum: 1,
              itemPrice: 100,
              itemSize: [
                {
                  size: 'small',
                  price: 120,
                },
                {
                  size: 'medium',
                  price: 200,
                }
              ],
              toppingList: [
                {
                  for: 'Pizza',
                  name: 'Pepperoni',
                  quantity: 1,
                  price: 20,
                },
              ],
            },
          ],
        },
      ],
    },
  ]

  orderedTypeList: Type[] = [];

  toppingList: Topping[] = [
    {
      name: 'Olives',
      for: 'Pizza',
      quantity: 1,
      price: 20,
    },
    {
      name: 'Mushroom',
      for: 'Pizza',
      quantity: 1,
      price: 20,
    },
    {
      name: 'Pepperoni',
      for: 'Pizza',
      quantity: 1,
      price: 20,
    },
    {
      name: 'Pineapple',
      for: 'Burger',
      quantity: 1,
      price: 20,
    },
    {
      name: 'Green Pepper',
      for: 'Pizza',
      quantity: 1,
      price: 20,
    }
  ];

}