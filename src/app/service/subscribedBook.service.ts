import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { WishlistComponent } from '../wishlist/wishlist.component';
import 'rxjs/add/operator/map';

@Injectable()
export class SubscribedBookService {
  constructor(private http : Http) { }

    getSubscribedBookdetailsByUserId(userId) {
        return this.http.get('http://localhost:8080/BookWorld/rest/subscribe/getAllSubscribedListByUserId?userId='+userId)
          .map((response: Response) => response.json());
      }
 }
