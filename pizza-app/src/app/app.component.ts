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
          totalQuantity: 1,
          itemImage: '../assets/images/Pizza/ItalianPizza.jpg',
          isOrdered: false,
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
                  name: 'Green pepper',
                  quantity: 1,
                  price: 20,
                },
              ],
              addMoreTopping: false,
              toggleToppingList() {
                this.addMoreTopping = !this.addMoreTopping;
              },
              addTopping(topping: Topping) {
                const element = this.toppingList.find((element) => element.name === topping.name);
                if (element) {
                  if (element.quantity < 3) {
                    element.quantity++;
                  }
                } else {
                  this.toppingList.push(topping);
                }
              },
              removeTopping(selectedTopping: Topping) {
                const element = this.toppingList.find((element) => element.name === selectedTopping.name);
                if (element.quantity > 1) {
                  element.quantity--;
                } else {
                  this.toppingList.splice(this.toppingList.indexOf(element), 1);
                }
              },
            },
          ],
          addItem(quantity) {
            this.quantityList.push(quantity);
            this.totalQuantity++;
          },
        },
        {
          itemName: 'Paneer butter masala',
          itemPrice: 200,
          totalQuantity: 1,
          itemImage: '../assets/images/Pizza/ItalianPizza.jpg',
          isOrdered: false,
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
              addMoreTopping: false,
              toggleToppingList() {
                this.addMoreTopping = !this.addMoreTopping;
              },
              addTopping(topping: Topping) {
                const element = this.toppingList.find((element) => element.name === topping.name);
                if (element) {
                  if (element.quantity < 3) {
                    element.quantity++;
                  }
                } else {
                  this.toppingList.push(topping);
                }
              },
              removeTopping(selectedTopping: Topping) {
                const element = this.toppingList.find((element) => element.name === selectedTopping.name);
                if (element.quantity > 1) {
                  element.quantity--;
                } else {
                  this.toppingList.splice(this.toppingList.indexOf(element), 1);
                }
              },
            },
          ],
          addItem(item) {

          },
        },
      ],
    },
  ];

  orderedTypeList: Type[] = [];

  allToppingList: Topping[] = [
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
      name: 'Green pepper',
      for: 'Pizza',
      quantity: 1,
      price: 20,
    }
  ];

}