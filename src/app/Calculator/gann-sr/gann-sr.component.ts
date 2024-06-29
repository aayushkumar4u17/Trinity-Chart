import { Component, OnInit, Injectable, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, NgModel } from '@angular/forms';
import { pageHero } from '../../components/page-hero/page-hero.component';
import { PageInput } from '../../app.component';
@Component({
  selector: 'app-gann-sr',
  standalone: true,
  imports: [FormsModule, pageHero],
  templateUrl: './gann-sr.component.html',
  styleUrl: '../../app.component.css'
})
@Injectable()
export class GANNSRComponent {
  pageInput: PageInput = new PageInput;
  Instructions: string = 'Enter the current price of any underlying asset during and make smarter trading decisions with our real-time calculator.';
  someInput: any = 0;
  onSubmit() {
    console.log(this.someInput);
  }
  ngOnInit() {
    this.pageInput.title = "Gann SQ of 9 Support & Resistance Calculator";
    this.pageInput.brief1 = "Elevate your trading skills with our GANN Support  & Resistance Calculator";
    this.pageInput.brief2 = "Enter the current price of any underlying asset during and make smarter trading decisions with our real-time calculator.";
  }
}
