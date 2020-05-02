import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms'
import { Grid, Hours, SelectedHours } from '../shared/hours';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  gridForm: FormGroup;
  rows: FormArray;
  grid: Grid;
  hours = Hours;
  selectedHours = SelectedHours;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.gridForm.addControl('rows', this.rows);
    this.rows.push(this.createItemFormGroup());
  }

  createForm() {
    this.rows = this.fb.array([]);
    this.gridForm = this.fb.group({
      selectHour: '4',
      grid: [{
        value: ''
      },
      {
        value: ''
      },
      {
        value: ''
      },
      {
        value: ''
      }]
    });
  }

  onSubmit() {
    this.grid = this.gridForm.value;
    console.log(this.grid);
  }

  onChange(e): void {
    this.selectedHours = e.target.value;
  }

  onAddRow(): void {
    this.rows.push(this.createItemFormGroup());
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      grid: [{
        value: ''
      },
      {
        value: ''
      },
      {
        value: ''
      },
      {
        value: ''
      }]
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
    return (24 / number) * currentIndex < 10
      ? `0${(24 / number) * currentIndex}.00`
      : `${(24 / number) * currentIndex}.00`;
  }

  getWidth(hours: number) {
    return `${100 / hours}%`;
  }

  setContainerWidth(hours: number) {
    return hours == 24 ? '1400px' : `100%`;
  }
}
