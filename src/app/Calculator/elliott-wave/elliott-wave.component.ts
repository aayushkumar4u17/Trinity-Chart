import { Component, Injectable, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  imports: [FormsModule],
  // styleUrl: '../../app.component.css',
  selector: 'app-elliott-wave',
  standalone: true,
  // imports: [],
  templateUrl: './elliott-wave.component.html',
  styleUrl: './elliott-wave.component.css'
})
export class ElliottWaveComponent {
  @Input() Title: string = 'Gann SQ';
  @Input() Instructions: string = 'Enjoy baby';

  price: number = 0;
  calculateSum() {
    // return this.http.get("http://localhost:8080/calculator/gannSR");
  }
}
