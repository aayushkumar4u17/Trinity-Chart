import { Component, Injectable, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  imports: [FormsModule],
  // styleUrl: '../../app.component.css',
  selector: 'app-pivot',
  standalone: true,
  // imports: [],
  templateUrl: './pivot.component.html',
  styleUrl: './pivot.component.css'
})
export class PivotComponent {
  @Input() Title: string = 'Gann SQ';
  @Input() Instructions: string = 'Enjoy baby';

  price: number = 0;
  calculateSum() {
    // return this.http.get("http://localhost:8080/calculator/gannSR");
  }
}
