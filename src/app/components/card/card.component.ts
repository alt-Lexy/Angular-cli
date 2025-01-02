import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() company: string = "Entreprise du soleil";
  @Input() activity: string = "7911Z - Activités des agences de voyage";
  @Input() note: string = "52.01";
  @Input() risk: string = "C";
}
