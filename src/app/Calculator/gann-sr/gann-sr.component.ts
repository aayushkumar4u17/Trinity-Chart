import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
// import '../../app.component.css';

@Component({
  selector: 'app-gann-sr',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gann-sr.component.html',
  // styleUrl: './gann-sr.component.css'
  styleUrl: '../../app.component.css'
})
@Injectable()
export class GANNSRComponent {
  // constructor(private document: Document) { }
  @Input() Title: string = 'Gann Support & Resistance Calculator';
  @Input() Instructions: string = 'Enter the current price of any underlying asset during and make smarter trading decisions with our real-time calculator.';

  price: number = 0;
  calculateSum() {
    return this.price * 10;
  }
  togglerl() {
    document.addEventListener("DOMContentLoaded", () => {
      const sidebar = document.getElementById("sidebar");
      const toggleBtn = document.getElementById("toggle-btn");

      toggleBtn?.addEventListener("click", () => {
        sidebar?.classList.toggle("collapsed");
      });
    });
  }
}
