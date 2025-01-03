import { Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  search = model<string>('');
  searchBtnClicked = output({alias: 'submit'});

  searchClick() {
    this.searchBtnClicked.emit();
  }
}
