import { Component, OnInit } from '@angular/core';
import { Hours } from '../shared/hours';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  hours = Hours;

  constructor() { }

  ngOnInit(): void {
  }

}
