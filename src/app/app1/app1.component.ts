import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class App1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
