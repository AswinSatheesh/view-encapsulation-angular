import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class App2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
