import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscribedBookService } from '../service/subscribedBook.service';

@Component({
  selector: 'app-subscribedbooks',
  templateUrl: './subscribedbooks.component.html',
  styleUrls: ['./subscribedbooks.component.css']
})
export class SubscribedbooksComponent implements OnInit {

  private userDetail : any;
  private subscribeBookdata : any;
  constructor(private subscribedBooksService : SubscribedBookService,private router: Router) { }

  ngOnInit() {
    this.subscribedBookDetails();
  }
  
  subscribedBookDetails(){
    this.userDetail = JSON.parse(sessionStorage.getItem('UserDetails'));
    this.subscribedBooksService.getSubscribedBookdetailsByUserId(this.userDetail.userid).subscribe(
      data => this.subscribeBookdata = data,
      error => console.log(error), 
    );
  }
  viewDetails(bookId){
    this.router.navigate(['dashboard/singleProduct',bookId]);
  }
}
