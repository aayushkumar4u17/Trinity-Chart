import { Component, Injectable, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  imports: [FormsModule],
  // styleUrl: '../../app.component.css',
  selector: 'app-fibonacci',
  standalone: true,
  // imports: [],
  templateUrl: './fibonacci.component.html',
  styleUrl: './fibonacci.component.css'
})
export class FibonacciComponent {
  @Input() Title: string = 'Gann SQ';
  @Input() Instructions: string = 'Enjoy baby';

  price: number = 0;
  calculateSum() {
    // return this.http.get("http://localhost:8080/calculator/gannSR");
  }
}
