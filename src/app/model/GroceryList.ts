import {Item} from 'src/app/model/Item';
export interface GroceryList {
  categoryName:String;
	groceryListId:number;
	itemList: Item[];
}