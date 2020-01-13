export class Type {
  typeName: string;
  itemList: Item[];
}

export class Item {
  itemName: string;
  itemPrice: number;
  totalQuantity: number;
  itemImage: any;
  quantityList: Quantity[];
}

export class Quantity {
  itemNum: number;
  itemPrice: number;
  itemSize: Size[];
  toppingList: Topping[];
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