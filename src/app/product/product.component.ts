import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, OnChanges, OnDestroy, Input, Output, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  //changeDetection:ChangeDetectionStrategy.OnPush,

})
export class ProductComponent implements OnInit,AfterViewInit,OnChanges,OnDestroy {

  constructor() { }
  @Input() data:any;
  @Output() quantity: number;
  totalAmount:any;
  
  ngOnInit() {
    this.totalAmount = this.data.price;
  }
  onQuantityChange(evt){
    //debugger;
    console.log("Event:",evt.currentTarget.value);
    this.totalAmount = (this.data.price * evt.currentTarget.value).toFixed(2);
    //this.cd.markForCheck();
  }
  ngAfterViewInit(){

  }
  ngOnChanges(){

  }
  ngOnDestroy(){

  }

}
