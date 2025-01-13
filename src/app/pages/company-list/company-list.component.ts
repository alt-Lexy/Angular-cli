import { Component, computed, inject, model, signal } from '@angular/core';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company/company.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-company-list',
  imports: [CommonModule, CardComponent, SearchBarComponent],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent {
  companyService = inject(CompanyService)

  companies = signal<Company[]>([]);
  search = model('');

  filteredCompanies = computed(() =>{
    return this.companies().filter(company => company.infoCompany.toLocaleLowerCase().includes(this.search()))
  })

  constructor() { 
    this.companies.set(this.companyService.getAll());
  }

  addCompany() {
    const genericCompany = new Company();
    this.companyService.add(genericCompany);
    this.companies.set(this.companyService.getAll());
  }
}
