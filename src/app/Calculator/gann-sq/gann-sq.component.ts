// import { Component } from '@angular/core';
import { Component, Injectable, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-gann-sq',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gann-sq.component.html',
  // styleUrl: './gann-sq.component.css'
  styleUrl: '../../app.component.css'

})
@Injectable()
export class GANNSQComponent {
  @Input() Title: string = 'Gann SQ';
  @Input() Instructions: string = 'Enjoy baby';

  price: number = 0;
  calculateSum() {
    // return this.http.get("http://localhost:8080/calculator/gannSR");
  }

}
