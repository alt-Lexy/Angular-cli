import { Component, computed, inject, model, signal } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { Company } from './models/company.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CompanyType } from './utils/company.utils';
import { CommonModule } from '@angular/common';
import { CompanyService } from './services/company/company.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  companyService = inject(CompanyService)

  companies!: Company[];
  search = model('');

  filteredCompanies = computed(() =>{
    return this.companies.filter(company => company.infoCompany.toLocaleLowerCase().includes(this.search()))
  })

  constructor() { 
    this.companies = this.companyService.getAll();
  }
}
