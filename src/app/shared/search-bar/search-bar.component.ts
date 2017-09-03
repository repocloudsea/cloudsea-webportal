import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() onFiltered = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  doSearch(input: string): void {
    this.onFiltered.emit(input);
  }
}
