import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-gann-sr',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gann-sr.component.html',
  styleUrl: './gann-sr.component.css'
})
@Injectable()
export class GANNSRComponent {
  // constructor(private http: HttpClient) { }
  @Input() Title: string = 'Gann Support and Resistance Calculator';
  @Input() Instructions: string = 'Enter the current price of any underlying asset during and make smarter trading decisions with our real-time calculator.';

  price: number = 0;
  calculateSum() {
    // return this.http.get("http://localhost:8080/calculator/gannSR");
  }
}
