import { Component, computed, inject, model, signal } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { Company } from './models/company.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CompanyType } from './utils/company.utils';
import { CommonModule } from '@angular/common';
import { CompanyService } from './services/company/company.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
