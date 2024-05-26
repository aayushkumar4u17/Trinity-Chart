import { Component, Injectable, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-hexagon',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hexagon.component.html',
  styleUrl: '../../app.component.css'
})
export class HexagonComponent {
  @Input() Title: string = 'Gann SQ';
  @Input() Instructions: string = 'Enjoy baby';
  price: number = 0;
  calculateSum() {
    // return this.http.get("http://localhost:8080/calculator/gannSR");
  }
}
