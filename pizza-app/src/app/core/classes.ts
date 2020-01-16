export class Type {
  typeName: string;
  itemList: Item[];
}

export class Item {
  itemName: string;
  itemPrice: number;
  totalQuantity: number;
  itemImage: any;
  isOrdered: boolean = false;
  quantityList: Quantity[];
  addItem(quantity){};
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