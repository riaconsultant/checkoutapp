import { Component, OnInit, ChangeDetectionStrategy, OnChanges, OnDestroy, AfterViewInit, Input,Output, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent implements OnInit,OnChanges,AfterViewInit,OnDestroy {
  @Input() itemList;
  message;
  constructor(private cd:ChangeDetectorRef,private router:Router,private productService:ProductsService) { }

  ngOnInit() {
    this.itemList = [{}];
  }
  ngOnChanges(){

  }
  ngAfterViewInit(){
    this.productService.getProduct().subscribe((result:any)=>{
      this.itemList = result;
      this.cd.markForCheck();
      console.log(result);
    },(error:HttpErrorResponse)=>{
      this.message = "Problem in Service,Please try after sometime.";
    })
  }
  ngOnDestroy(){

  }

}
