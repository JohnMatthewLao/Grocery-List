import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroceryService} from '../grocery-service/grocery-service.service';
import { GroceryList } from '../model/GroceryList';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  groceryLists: GroceryList [];
  //private router: Router
  constructor(public service: GroceryService) { }

  ngOnInit(): void {
    this.service.getGroceryList().subscribe(res => {
      this.groceryLists = [...res];
      console.log(this.groceryLists);
    });;
  }

  delete(body){
    console.log(body);
    this.service.deleteGroceryList(body);
  }
}
