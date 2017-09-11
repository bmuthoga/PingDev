import { Component, OnInit, Input } from '@angular/core';

import { SearchDevsService } from '../search-devs.service';

@Component({
  selector: 'app-search-devs',
  templateUrl: './search-devs.component.html',
  styleUrls: ['./search-devs.component.css']
})
export class SearchDevsComponent implements OnInit {
  place: string;
  language: string;

  results: any[] = []; // holds data from the service
  selected: boolean = false; // flag for checking if dev is clicked or not
  selectedDev: any; // currently selected dev details
  error_text: string = ""; // error reporting text displayed to the end user

  constructor(private searchService: SearchDevsService) { }

  ngOnInit() {
  }

  search(place: string, language: string) {
    this.selected = false;
    this.error_text = "";
    if (place || language) {
      this.place = place;
      this.language = language;
      this.searchService.getDevsByPlaceAndLanguage(place, language).subscribe(
        users => {
          this.results = users;
        },
        error => {
          this.results = [];
          this.error_text = "Darned Ninjutsu! No ninjas found. Try again ツ";
          console.error(error);
        }
      );
    }
  }

  getDetails(username: string) {
    this.searchService.getDevDetailsByUsername(username).subscribe(
      userDetails => {
        this.selectedDev = userDetails;
        this.selected = true;
      },
      error => {
        this.selected = false;
        console.error(error);
      }
    )
  }

}
