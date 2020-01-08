export class Topping {
  name: string;
  color: string;
}

export class Pizza {
  name: string;
  size: string;
  addedToppingList: Topping[] = [];
}