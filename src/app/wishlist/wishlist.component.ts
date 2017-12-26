import { Component, OnInit } from '@angular/core';
import { WishListService } from '../service/wishList.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  private wishListdata : any;
  private userDetail:any;
  private showDetail:any;

  constructor(private wishListService : WishListService) { }

  ngOnInit() {
    this.wishListDetails();
    this.getAllWishListDdetails();
  }
  
  wishListDetails(){
    this.userDetail = JSON.parse(sessionStorage.getItem('UserDetails'));
    this.wishListService.getWishListdetailsByUserId(this.userDetail.userid).subscribe(
      data => this.wishListdata = data,
      error => console.log(error),       
    );
  }

  removeFromWishList(wishListId){
    this.wishListService.removeWishList(wishListId).subscribe(
        data => {
          alert('Deleted Successfully');
          this.getAllWishListDdetails();
          this.wishListDetails();
          
        }  
    );
  }

  getAllWishListDdetails() {
    this.wishListService.dogetAllWishListDdetails().subscribe(
           data =>this.wishListDetailsHandler(data)  
    )
  }

  wishListDetailsHandler(data) {
    if(data.length == 0) {
      this.showDetail = false;
    } else {
      this.showDetail = true ;
    }
  }

}
