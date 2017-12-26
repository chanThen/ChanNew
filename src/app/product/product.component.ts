import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private categoryID: number;
  private product: any;
  private userDetail: any;
  private bookId: any;
  constructor(private activateRouter : ActivatedRoute, private productService : ProductService, private router: Router) { }

  ngOnInit() {
    let categoryid = this.activateRouter.snapshot.params['categoryId'];
    this.categoryID = categoryid;
    this.productService.getBookByCategoryId(this.categoryID).subscribe(
      data => this.product = data,
      error => console.log(error),       
    );
  }

  checkForSubscription(bookId) {
    this.bookId = bookId;
    this.userDetail = JSON.parse(sessionStorage.getItem('UserDetails'));
    this.productService.doCheckForSubscription(bookId,this.userDetail.userid).subscribe(
      data => this.subscriptionHandler(data)
    )   
  }

  subscriptionHandler(data){
    if(data == null){
      alert("Not yet Subscribed");
      this.router.navigate(['dashboard/subscribePage',this.bookId]);
    } else {
      alert("Already Subscribed");
      this.router.navigate(['dashboard/singleProduct',this.bookId]);
    }
  }
}
