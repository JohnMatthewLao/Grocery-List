import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GroceryList } from 'src/app/model/GroceryList';


@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'http://localhost:9030/'

  groceryLists: GroceryList [];

  getGroceryList() {
    return this.http.get<any>(`${this.BaseURI}/grocery-lists`);
  }

  deleteGroceryList(body){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body)
    };
    console.log(options);
    return this.http.delete<any>(`${this.BaseURI}/grocery-lists/`, options).subscribe((res) =>{
      console.log(res);
    })
  }
}
