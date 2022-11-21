export interface IOrderValues {
  name: string;
  amount: number;
  unit: string;
}

export interface ProductPlacement {
  division: string;
  aisle: number;
}

export type NewStorageProduct = Omit<
  StorageProductType,
  "lotnum" | "bestbefore"
>;

export interface IOrderSliceInitial {
  order: NewStorageProduct[];
  editOrder: IOrderValues;
}

export enum Positions {
  storeOwner = "Owner",
  supervisor = "Supervisor",
  salesPerson = "Salesperson",
}

export enum Divisions {
  fruitAndVegetables = "Fruit and Vegetables",
  dryAndProcessedFood = "Dry and Processed Food",
  meatAndFish = "Meat and Fish",
  dairy = "Dairy",
  bread = "Bread",
  preparedFoods = "Prepared Foods",
  utilityGoods = "Utility Goods",
  frozenProducts = "Frozen products",
  beverages = "Beverages",
}

export interface Searchvalues {
  keyword: string;
  field: string;
}

export enum Criteria {
  product = "Product",
  division = "Division",
  supplier = "Supplier",
  lotnum = "Lot number",
}

export enum Unit {
  Kilograms = "KG",
  Packages = "PKG",
  Packets = "PKT",
  Pieces = "PC",
}

export interface NewProduct {
  name: string;
  division: string;
  supplier: string;
}
export interface IProduct extends NewProduct {
  id: string;
}

export interface StorageProductType extends NewProduct {
  amount: number;
  unit: string;
  lotnum: string;
  bestbefore: string;
  _id?: string;
}

export interface OutofDateProductType extends NewProduct {
  amount: number;
  unit: string;
  lotnum: string;
  bestbefore: string;
  _id: string;
}

export interface NewUser {
  name: string;
  password: string;
  position: string;
  confirmpassword: string;
  market: string;
}

export interface LoginInput {
  name: string;
  password: string;
}

export interface User {
  name: string | null;
}

export interface IProductPlacement {
  division: string;
  aisle: number;
  _id: string;
}

export interface IMarket {
  id: string;
  name: string;
  personnel: string[];
  productPlacements: IProductPlacement[];
  storage: StorageProductType[];
}
