import { Component, OnInit } from '@angular/core';
import { Salesman } from '../salesman';

@Component({
  selector: 'app-salesman',
  templateUrl: './salesman.component.html',
  styleUrls: ['./salesman.component.css']
})
export class SalesmanComponent implements OnInit {
salesManList: Salesman[] = [
  {id: 101, name: 'John',  designation: 'Salesman', image: 'assets/images/1.jpg'},
  {id: 102, name: 'Scott', designation: 'Salesman', image: 'assets/images/2.jpg'},
  {id: 103, name: 'Mark',  designation: 'Salesman', image: 'assets/images/3.jpg'},
  {id: 104, name: 'Steve',  designation: 'Manager', image: 'assets/images/4.jpg'},
  {id: 105, name: 'Arnold',  designation: 'Area Manager', image: 'assets/images/5.jpg'}
];
  constructor() { }

  ngOnInit() {
  }

}
