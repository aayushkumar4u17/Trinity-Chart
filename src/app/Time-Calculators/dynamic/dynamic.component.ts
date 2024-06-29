import { Component } from '@angular/core';
import { PageInput } from '../../app.component';
import { pageHero } from '../../components/page-hero/page-hero.component';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [pageHero],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {
  pageInput: PageInput = new PageInput;
  Instructions: string = 'Enter the current price of any underlying asset during and make smarter trading decisions with our real-time calculator.';

  ngOnInit() {
    this.pageInput.title = "Gann SQ of 9 Support & Resistance Calculator";
    this.pageInput.brief1 = "Elevate your trading skills with our GANN Support  & Resistance Calculator";
    this.pageInput.brief2 = "Enter the current price of any underlying asset during and make smarter trading decisions with our real-time calculator.";
  }
}
