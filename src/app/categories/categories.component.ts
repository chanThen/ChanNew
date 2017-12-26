import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from './../service/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public category;

  constructor(private categoryService : CategoryService, private router : Router) { }

  ngOnInit() {
      this.categoryService.getAllCategory().subscribe(
        data => this.category = data,
        error => console.log(error),       
      );
    }

  getProductById(categoryId) {
    this.router.navigate(['dashboard/product',categoryId],);
  }
}
