import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  company: string = "Entreprise du soleil";
  activity: string = "entreprise spécialisé dans le tourisme";
  note: string = "52.01";
  risk: string = "C";
}
