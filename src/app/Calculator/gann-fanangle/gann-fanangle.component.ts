import { Component, Injectable, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  imports: [FormsModule],
  styleUrl: '../../app.component.css',
  selector: 'app-gann-fanangle',
  standalone: true,
  // imports: [],
  templateUrl: './gann-fanangle.component.html',
  // styleUrl: './gann-fanangle.component.css'
})
export class GANNFanangleComponent {
  @Input() Title: string = 'Gann SQ';
  @Input() Instructions: string = 'Enjoy baby';

  price: number = 0;
  calculateSum() {
    // return this.http.get("http://localhost:8080/calculator/gannSR");
  }
}
