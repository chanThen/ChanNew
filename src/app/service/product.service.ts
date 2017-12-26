import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
   
    constructor(private http : Http) { }

  getBookByCategoryId(categoryid) {
        return this.http.get('http://localhost:8080/BookWorld/rest/bookDetail/getBookDetailBycategoryId?categoryId='+categoryid)
        .map(response=>response.json())
      }

  doCheckForSubscription(bookid,userid){
    return this.http.get('http://localhost:8080/BookWorld/rest/subscribe/checkForSubscription?bookId='+bookid+'&userId='+userid)
    .map(response=>response.json())
  }
 }
