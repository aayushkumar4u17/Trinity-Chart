import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LiveAnalysisComponent } from './live-analysis/live-analysis.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import './app.component.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LiveAnalysisComponent, BlogComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Trinity-Chart';
}
export class PageInput {
  title: string = "";
  brief1: string = "";
  brief2: string = "";
} 