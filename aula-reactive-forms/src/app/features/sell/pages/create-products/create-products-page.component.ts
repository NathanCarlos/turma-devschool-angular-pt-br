import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-products-page.component.html',
  styleUrls: ['./create-products-page.component.scss']
})
export class CreateProductPageComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
  }

}
