import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms'
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
    this.rows.push(this.createItemFormGroup(0));
  }

  createForm() {
    this.rows = this.fb.array([]);
    this.gridForm = this.fb.group({
      selectHour: '4',
      name: 'MDE Item',
      time: '00.00',
      value: ''
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
    let index = 0;
    this.rows.push(this.createItemFormGroup(index));
  }

  createItemFormGroup(i:number): FormGroup {
    return this.fb.group({
      selectHour: '4',
      name: `MDE Item ${i}`,
      time: '00.00',
      value: ''
    });
  }

  createRange(number: number):Array<any> {
    var numItems: number[] = [];
    for (var i = 1; i <= number; i++) {
      numItems.push(i - 1);
    }
    return numItems;
  }

  setHour(number: number, currentIndex: number):string {
    return (24 / number) * currentIndex < 10
      ? `0${(24 / number) * currentIndex}.00`
      : `${(24 / number) * currentIndex}.00`;
  }

  getWidth(hours: number):string {
    return `${100 / hours}%`;
  }

  setContainerWidth(hours: number):string {
    return hours == 24 ? '1400px' : `100%`;
  }
}
