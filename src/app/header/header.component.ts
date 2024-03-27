import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdvanceGANNComponent } from '../Calculator/advance-gann/advance-gann.component';
import { GANNSQComponent } from '../Calculator/gann-sq/gann-sq.component';
import { GANNSRComponent } from '../Calculator/gann-sr/gann-sr.component';
import { HexagonComponent } from '../Calculator/hexagon/hexagon.component';
import { GANNFanangleComponent } from '../Calculator/gann-fanangle/gann-fanangle.component';
import { ElliottWaveComponent } from '../Calculator/elliott-wave/elliott-wave.component';
import { FibonacciComponent } from '../Calculator/fibonacci/fibonacci.component';
import { PivotComponent } from '../Calculator/pivot/pivot.component';
import { CamarillaComponent } from '../Calculator/camarilla/camarilla.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AdvanceGANNComponent, GANNSQComponent, GANNSRComponent, HexagonComponent, GANNFanangleComponent, ElliottWaveComponent, FibonacciComponent, PivotComponent, CamarillaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
