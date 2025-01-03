import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { Company } from './models/company.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  company!: Company;

  constructor() {
    this.company = new Company();
    this.company.infoCompany = "Entreprise du soleil";
    this.company.infoActivity = "7911Z - Activités des agences de voyage";
    this.company.infoNote = "52.01";
    this.company.infoScore = "C";
  }
}
