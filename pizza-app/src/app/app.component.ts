import { Component } from '@angular/core';
import { Type, Topping, Item } from './core/classes';

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
      name: 'Pizza',
      itemList: [
        {
          for: 'Pizza',
          name: 'Italian',
          price: 200,
          totalQuantity: 1,
          image: '../assets/images/Pizza/ItalianPizza.jpg',
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
          addQuantity(quantity) {
            this.totalQuantity++;
          },
          removeQuantity(quantity) {
            if (this.totalQuantity == 1) {
              return false;
            } else {
              this.totalQuantity--;
            }
          },
        },
        {
          for: 'Pizza',
          name: 'Paneer butter masala',
          price: 200,
          totalQuantity: 1,
          image: '../assets/images/Pizza/ItalianPizza.jpg',
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
          addQuantity(quantity) {

          },
          removeQuantity(quantity) {
            if (this.totalQuantity == 1) {
              return false;
            } else {
              this.totalQuantity--;
            }
            console.log(this.totalQuantity);
          },
        },
      ],
    },
  ];

  orderedTypeList: Type[] = [];

  orderItem(item) {
    const type = new Type();
    type.name = item.itemFor;
    this.orderedTypeList.push(type);
  }

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