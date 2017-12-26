import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SubscriptionService {
  constructor(private http : Http) { }

    getSubscribedBookdetailsByUserId(userId) {
        return this.http.get('http://localhost:8080/BookWorld/rest/subscribe/getAllSubscribedListByUserId?userId='+userId)
          .map((response: Response) => response.json());
      }

      doCheckForSubscription(bookid,userid){
        return this.http.get('http://localhost:8080/BookWorld/rest/subscribe/checkForSubscription?bookId='+bookid+'&userId='+userid)
        .map((response: Response) => response.json());
      }

      payToSubscribe(userid,bookid) {
        return this.http.post('http://localhost:8080/BookWorld/rest/subscribe/addToSubscribe?userId='+userid+'&bookId='+bookid,null)
        .map((response: Response) => response.json());
      }
 }
