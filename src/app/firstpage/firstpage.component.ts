import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})
export class FirstpageComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Software analysis and design services', 'custom computer Software programming services', 'custom computer Software stores', 'computer Software installation services', 'computer Software', 'computer', 'packaged', 'merchant wholesalers'];
  filteredOptions: Observable<string[]> | undefined;
  router: any;
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  nextpage1(){
    this.router.navigate()
  }
}


