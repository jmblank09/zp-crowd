import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}

  profession: string | null = null;
  showAutocomplete: Boolean = false;
  professionList: Array<string> = [
    'Hairdresser',
    'Plumber',
    'UX Designer',
    'Frontend Developer',
    'Digital Marketer',
    'Babysitter'
  ];
  filteredProfessionList: Array<any> = [];

  ngOnInit() {
    this.filteredProfessionList = [...this.professionList];
  }

  // filter profession list according to the typed text
  filterList(): void {
    const newArray = this.professionList.filter(p => this.profession.toLowerCase() === p.substring(0, this.profession.length).toLowerCase());

    this.filteredProfessionList = [...newArray];
  }

  // select profession from autocomplete list
  selectProfession(profession: string): void {
    this.profession = profession;
    this.showAutocomplete = false;
  }
}
