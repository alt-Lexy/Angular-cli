import { Component, computed, model, signal } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { Company } from './models/company.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CompanyType } from './utils/company.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  companies!: Company[];
  search = model('');

  filteredCompanies = computed(() =>{
    return this.companies.filter(company => company.infoCompany.includes(this.search()))
  })

  constructor() {
    this.companies = []
    const company1 = new Company();
    company1.infoCompany = "Entreprise du soleil";
    company1.type = CompanyType.SCORE_C;
    company1.infoActivity = "7911Z - Activités des agences de voyage";
    company1.infoNote = "52.01";
    company1.infoScore = "C";
    this.companies.push(company1)

    const company2 = new Company();
    company2.infoCompany = "Karre";
    company2.type = CompanyType.SCORE_A;
    company2.infoActivity = "6201Z - Programmation informatique";
    company2.infoNote = "90.08";
    company2.infoScore = "A";
    this.companies.push(company2)
    
    const company3 = new Company();
    company3.infoCompany = "Star";
    company3.type = CompanyType.SCORE_B
    company3.infoActivity = "4778C - Autres commerces de détail spécialisés divers";
    company3.infoNote = "75.80";
    company3.infoScore = "B";
    this.companies.push(company3)
  }
}
