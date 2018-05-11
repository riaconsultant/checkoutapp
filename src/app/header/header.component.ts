import { Component, OnInit, ChangeDetectionStrategy, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit,OnChanges,OnDestroy {

  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(){

  }
  ngOnDestroy(){
    
  }

}
