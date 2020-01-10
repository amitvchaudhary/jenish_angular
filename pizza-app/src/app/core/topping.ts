export class Topping {
  name: string;
  color: string;
}

export class Pizza {
  name: string;
  size: string[];
  isOrdered: boolean;
  addedToppingList: Topping[];
}

export class Item {
  itemName: string;
  pizzaList: Pizza[];
}