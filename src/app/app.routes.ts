import { Routes } from '@angular/router';
import { LiveAnalysisComponent } from './live-analysis/live-analysis.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    { path:'', redirectTo: 'home', pathMatch: 'full' },
    { path:'home', component: HomeComponent},
    { path:'live-analysis', component:LiveAnalysisComponent},
    { path:'blog', component: BlogComponent}
];
