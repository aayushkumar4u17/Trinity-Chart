import { Component } from '@angular/core';
import { pageHero } from '../../components/page-hero/page-hero.component';
import { PageInput } from '../../app.component';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [pageHero],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent {
  pageInput: PageInput = new PageInput;
  Instructions: string = 'Enter the current price of any underlying asset during and make smarter trading decisions with our real-time calculator.';

  ngOnInit() {
    this.pageInput.title = "Gann SQ of 9 Support & Resistance Calculator";
    this.pageInput.brief1 = "Elevate your trading skills with our GANN Support  & Resistance Calculator";
    this.pageInput.brief2 = "Enter the current price of any underlying asset during and make smarter trading decisions with our real-time calculator.";
  }
}
