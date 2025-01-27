import { Injectable } from '@angular/core';
import { Company } from '../../models/company.model';
import { CompanyType } from '../../utils/company.utils';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companies: Company[] = []
  currentIndex: number = 1;

  constructor() {
    this.load();
  }

  private save() {
    localStorage.setItem('company', JSON.stringify(this.companies));
  }

  private load() {
    const companyData = localStorage.getItem('company');
    if (companyData) {
      this.companies = JSON.parse(companyData).map((companyJSON: any) => Object.assign(new Company(), companyJSON))
      this.currentIndex = Math.max(...this.companies.map(company => company.id))
    } else {
      this.init();
      this.save();
    }
  }

  private init() {
    this.companies = []
    const company1 = new Company();
    company1.id = this.currentIndex++;
    company1.infoCompany = "Entreprise du soleil";
    company1.type = CompanyType.SCORE_C;
    company1.infoActivity = "7911Z - Activités des agences de voyage";
    company1.infoNote = "52.01";
    company1.infoScore = "C";
    this.companies.push(company1)

    const company2 = new Company();
    company2.id = this.currentIndex++;
    company2.infoCompany = "Karre";
    company2.type = CompanyType.SCORE_A;
    company2.infoActivity = "6201Z - Programmation informatique";
    company2.infoNote = "90.08";
    company2.infoScore = "A";
    this.companies.push(company2)

    const company3 = new Company();
    company3.id = this.currentIndex++;
    company3.infoCompany = "Star";
    company3.type = CompanyType.SCORE_B
    company3.infoActivity = "4778C - Autres commerces de détail spécialisés divers";
    company3.infoNote = "75.80";
    company3.infoScore = "B";
    this.companies.push(company3)
  }

  getAll() {
    return this.companies.map(company => company.copy())
  }

  get(id: number): Company | undefined {
    const company = this.companies.find(company => company.id === id);
    return company ? company.copy() : undefined
  }

  add(company: Company): Company {
    const companyCopy = company.copy();
    this.companies.push(companyCopy.copy(this.currentIndex++));
    this.save();
    return companyCopy;
  }

  update(companySended: Company): Company {
    const companyCopy = companySended.copy();

    const companyIndex = this.companies.findIndex(company => company.id === companySended.id);
    if (companyIndex != -1) {
      this.companies[companyIndex] = companyCopy.copy();
      this.save();
    }
    return companyCopy;
  }

  delete(id: number) {
    const companyIndex = this.companies.findIndex(company => company.id === id)
    if (companyIndex != -1) {
      this.companies.splice(companyIndex, 1);
      this.save();
    }
  }
}
