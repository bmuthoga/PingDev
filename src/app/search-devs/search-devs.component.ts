import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-devs',
  templateUrl: './search-devs.component.html',
  styleUrls: ['./search-devs.component.css']
})
export class SearchDevsComponent implements OnInit {
  place: string;
  language: string;

  constructor() { }

  ngOnInit() {
  }

  search(place: string, language: string) {
    this.place = place;
    this.language = language;
    console.log(this.place, this.language);
  }

}
