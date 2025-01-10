import { Component, computed, input, Input, InputSignal, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Company } from '../../models/company.model';
import { CompanyTypeProps } from '../../utils/company.utils';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
  company = input(new Company());
  backgroundColor = computed(()=>{
    return CompanyTypeProps[this.company().type].color;
  })

  // input can be required input.required
  /* solus 3 */
  /*company: InputSignal<Company> = input(new Company(), {
    alias: 'headOffice'
  });*/

  /* Input can be required
  /* second method
  /*@Input({
    alias: 'headOffice'
  }) company: Company = new Company()*/

  /* first method
  /*@Input() company: string = "Entreprise du soleil";
  @Input() activity: string = "7911Z - Activités des agences de voyage";
  @Input() note: string = "52.01";
  @Input() score: string = "C";*/
}
