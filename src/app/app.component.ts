import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app--Uroot',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TEST';

  ngOnInit() {
    const qwer = 'qwq';
    qwer = 'qazxc';
  }
}
