import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Grid, Hours, SelectedHours } from '../shared/hours';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  grid: Grid;
  gridForm: FormGroup;
  hours = Hours;
  selectedHours = SelectedHours;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    //selectedHours = this.gridForm.get('selectHour').value;
  }

  createForm() {
    this.gridForm = this.fb.group({
      selectHour: '4'
    });
  }

  onSubmit() {
    this.grid = this.gridForm.value;
    console.log(this.grid);
    this.gridForm.reset({
      selectHour: '4',
    });
  }

  createRange(number: number) {
    var numItems: number[] = [];
    for (var i = 1; i <= number; i++) {
      numItems.push(i - 1);
    }
    return numItems;
  }

  setHour(number: number, currentIndex: number) {
    return (24 / number) * currentIndex < 10 ? `0${(24 / number) * currentIndex}.00` : `${(24 / number) * currentIndex}.00`
  }
}
