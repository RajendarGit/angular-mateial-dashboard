import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss'],
  animations: [
    trigger('openCloseSideBarMenu', [
      state('slide', style({
        width: '250px'
      })),
      state('collapse', style({
        width: '65px'
      })),
      transition('slide => collapse', [
        animate('.3s')
      ]),
      transition('collapse => slide', [
        animate('0.3s')
      ]),
    ]),
  ],
})
export class MainmenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isOpenSideBar = true;

  sidenavToggle() {
    console.log(123);
    this.isOpenSideBar = !this.isOpenSideBar;
  }

}
