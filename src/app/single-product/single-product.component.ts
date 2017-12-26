import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { SingleProductService } from '../service/singleProduct.service';
import { WishListService } from '../service/wishList.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  private singleProductData: any;
  private userDetail: any;
  private bookId:any;
  private bookreviewDetails: any;

  constructor(private activateRoute : ActivatedRoute,private singleProductService: SingleProductService,
              private wishListService : WishListService) { }

  ngOnInit() {
    this.bookId = this.activateRoute.snapshot.params['bookId'];
    this.userDetail = JSON.parse(sessionStorage.getItem('UserDetails'));
    this.singleProductService.getBookDetailByBookId(this.bookId)
      .subscribe (
        data => this.singleProductData = data
      )
    this.getAllComments();
  }

  getAllComments() {
    this.singleProductService.getAllCommentsByBookId(this.bookId)
    .subscribe (
      data=>this.bookreviewDetails = data 
    )
  }
  
  addToWishList() {
    this.singleProductService.addToWishList(this.userDetail.userid,this.bookId).subscribe(
      data => this. addToWishListHandler(data),
      error => console.log(error)
    )
  }
  
  addToWishListHandler(data) {
    if(data != 'failure') {
      alert('Added To favourite');
    } else {
      alert('Already added to favourite');
    }
  }

  addToReview(reviewDetails) {
    reviewDetails.bookId = this.bookId;
    reviewDetails.userId = this.userDetail.userid;
    reviewDetails.name = this.userDetail.name;
    reviewDetails.bookComment = reviewDetails.commentText;
    reviewDetails.bookRating = JSON.parse(reviewDetails.optradio);
    this.wishListService.doAddToWishList(reviewDetails).subscribe(
      data => this.getAllComments()
    )
  }

}
