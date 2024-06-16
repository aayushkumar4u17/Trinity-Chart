import { Component, Input } from '@angular/core';

@Component({
    standalone: true,
    imports: [],
    selector: 'blog-card',
    templateUrl: './blog-card.component.html',
    styleUrl: './blog-card.component.css'
})
export class howToUse {
    @Input() link: string = 'Gann Support & Resistance Calculator';
    @Input() image: string = 'Enter the current price of any underlying asset during and make smarter trading decisions with our real-time calculator.';


}