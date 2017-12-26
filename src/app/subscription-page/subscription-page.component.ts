import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../service/subscription.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.css']
})
export class SubscriptionPageComponent implements OnInit {

  subscriptionDetails= {type:'',UserName:'',phonenumber:''};
  constructor(private subscriptionService: SubscriptionService,private activatedRoute:ActivatedRoute,
              private router: Router) { }

  private bookId:any;
  private userDetail:any;
  

  ngOnInit() {
    this.bookId = this.activatedRoute.snapshot.params['bookId'];
    this.userDetail = JSON.parse(sessionStorage.getItem('UserDetails'));
  }

   payToSubscribe(userDetails){
    this.subscriptionService.doCheckForSubscription(this.bookId,this.userDetail.userid)
    .subscribe(
      data => this.subscriptionHandler(data)
    )
  }
  subscriptionHandler(response) {
    console.log(response);
    console.log(response);
    if(response == null) {
      this.subscriptionService.payToSubscribe(this.userDetail.userid,this.bookId).subscribe(
        data => {
          this.router.navigate(['dashboard/singleProduct',this.bookId],);
        }
    );
    } else {
      alert("Already Subscribed");
      this.router.navigate(['dashboard/singleProduct',this.bookId],);
        
      }

      // box.find('.modal-content').css({'color': 'red'});
      
    }
  }

