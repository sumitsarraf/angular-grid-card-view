import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular Grid Card View";
  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
}