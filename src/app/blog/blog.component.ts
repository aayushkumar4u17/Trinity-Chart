import { Component } from '@angular/core';
import { howToUse } from "../components/blog-cards/blog-card.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  imports: [howToUse]
})
export class BlogComponent {

}
