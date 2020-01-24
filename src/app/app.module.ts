import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CircularGaugeChartModule } from '../../projects/angular-gauge-chart/src/public_api'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CircularGaugeChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
