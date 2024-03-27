import { Routes } from '@angular/router';
import { LiveAnalysisComponent } from './live-analysis/live-analysis.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { AdvanceGANNComponent } from './Calculator/advance-gann/advance-gann.component';
import { ElliottWaveComponent } from './Calculator/elliott-wave/elliott-wave.component';
import { FibonacciComponent } from './Calculator/fibonacci/fibonacci.component';
import { GANNFanangleComponent } from './Calculator/gann-fanangle/gann-fanangle.component';
import { GANNSQComponent } from './Calculator/gann-sq/gann-sq.component';
import { GANNSRComponent } from './Calculator/gann-sr/gann-sr.component';
import { HexagonComponent } from './Calculator/hexagon/hexagon.component';
import { PivotComponent } from './Calculator/pivot/pivot.component';
import { DynamicComponent } from './Time-Calculators/dynamic/dynamic.component';
import { ImportantComponent } from './Time-Calculators/important/important.component';
import { IntradayComponent } from './Time-Calculators/intraday/intraday.component';
import { MonthlyComponent } from './Time-Calculators/monthly/monthly.component';
import { PressureComponent } from './Time-Calculators/pressure/pressure.component';
import { TimeComponent } from './Time-Calculators/time/time.component';
import { CamarillaComponent } from './Calculator/camarilla/camarilla.component';

export const routes: Routes = [

    { path:'', redirectTo: 'home', pathMatch: 'full' },
    { path:'home', component: HomeComponent},
    { path:'live-analysis', component:LiveAnalysisComponent},
    { path:'blog', component: BlogComponent},
    { path:'advance-gann', component: AdvanceGANNComponent},
    { path:'elliott', component: ElliottWaveComponent},
    { path:'fibonacci', component: FibonacciComponent},
    { path:'fanangle', component: GANNFanangleComponent},
    { path:'sq', component: GANNSQComponent},
    { path:'sr', component: GANNSRComponent},
    { path:'hexagon', component: HexagonComponent},
    { path:'pivot', component: PivotComponent},
    { path: 'dynamic', component: DynamicComponent},
    { path: 'important', component: ImportantComponent},
    { path: 'intraday', component: IntradayComponent},
    { path: 'monthly', component: MonthlyComponent},
    { path: 'pressure', component: PressureComponent},
    { path: 'time', component: TimeComponent},
    { path: 'camarilla', component: CamarillaComponent}

];
