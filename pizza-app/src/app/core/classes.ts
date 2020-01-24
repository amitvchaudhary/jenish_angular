export class Type {
  name: string;
  itemList: Item[];
}

export class Item {
  for: string;
  name: string;
  price: number;
  totalQuantity: number;
  image: any;
  isOrdered: boolean = false;
  quantityList: Quantity[];
  addQuantity(quantity) { };
  removeQuantity(quantity) { };
}

export class Quantity {
  itemNum: number;
  itemPrice: number;
  itemSize: Size[];
  toppingList: Topping[];
  addMoreTopping: boolean = false;
  toggleToppingList() {
    this.addMoreTopping = !this.addMoreTopping;
  };
  addTopping(topping) {
    const element = this.toppingList.find((element) => element.name === topping.name);
    if (element) {
      if (element.quantity < 5) {
        element.quantity++;
      } else {
        element.quantity = 5;
      }

    } else {
      this.toppingList.push(topping);
    }
  };
  removeTopping(selectedTopping) {
    const element = this.toppingList.find((element) => element.name === selectedTopping.name);
    if (element.quantity > 1) {
      element.quantity--;
    } else {
      this.toppingList.splice(this.toppingList.indexOf(element), 1);
    }
  }
}

export class Size {
  size: string;
  price: number;
}

export class Topping {
  for: string;
  name: string;
  quantity: number;
  price: number;
}