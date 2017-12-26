import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SingleProductService {
   
    constructor(private http : Http) { }

  getBookDetailByBookId(bookid) {
        return this.http.get('http://localhost:8080/BookWorld/rest/bookDetail/getBookDetailById?bookId='+bookid)
        .map(response=>response.json())
  }

  addToWishList(userid,bookid){
      return this.http.post('http://localhost:8080/BookWorld/rest/wishList/addToWishList?userId='+userid+'&bookId='+bookid,null)
      .map(response=>response.json())
  }

  getAllCommentsByBookId(bookid){
    return this.http.get('http://localhost:8080/BookWorld/rest/ratingandreview/getAllReviews?bookId='+bookid)
    .map(response=>response.json())
  }
}
 