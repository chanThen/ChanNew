import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
    public getAllCategoryUrl='http://localhost:8080/BookWorld/rest/categories/getAllCategories';
  constructor(private http : Http) { }

    getAllCategory() {
        return this.http.get(this.getAllCategoryUrl)
          .map(response=>response.json());
      }
 }
