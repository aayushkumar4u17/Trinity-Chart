import { Component, Input } from '@angular/core';

@Component({
    standalone: true,
    imports: [],
    selector: 'page-hero',
    templateUrl: './page-hero.component.html',
    styleUrl: './page-hero.component.css'
})
export class pageHero {
    @Input() Title: string = '';
    @Input() brief1: string = '';
    @Input() brief2: string = '';
}