import { Component, Injectable, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { howToUse } from '../../components/howToUse/howToUse.component';

@Component({
  standalone: true,
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrl: './monthly.component.css',
  imports: [FormsModule, howToUse]
})
@Injectable()
export class MonthlyComponent {
  @Input() Title: string = 'Gann Support & Resistance Calculator';
  @Input() Instructions: string = 'Enter the current price of any underlying asset during and make smarter trading decisions with our real-time calculator.';

  price: number = 0;
  calculateSum() {
    // return this.price * 10;
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
