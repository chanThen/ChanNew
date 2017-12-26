import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { WishlistComponent } from '../wishlist/wishlist.component';
import 'rxjs/add/operator/map';

@Injectable()
export class WishListService {
  constructor(private http : Http) { }

    getWishListdetailsByUserId(userId) {
        return this.http.get('http://localhost:8080/BookWorld/rest/wishList/getAllWishListByUserId?userId='+userId)
          .map((response: Response) => response.json());
      }
    
      removeWishList(wishListId){
        return this.http.delete('http://localhost:8080/BookWorld/rest/wishList/deleteSelectedWishList?wishListId='+wishListId)
        .map((response: Response) => response.json());
      }

      doAddToWishList(reviewDetails){
        return this.http.post('http://localhost:8080/BookWorld/rest/ratingandreview/addRatingAndReview',reviewDetails)
        .map((response: Response) => response.json());
      }

      dogetAllWishListDdetails() {
        return this.http.get('http://localhost:8080/BookWorld/rest/wishList/getAllWishList')
        .map((response: Response) => response.json());
      }
 }
