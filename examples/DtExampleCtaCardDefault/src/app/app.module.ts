import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { HttpClientModule } from '@angular/common/http';
import { DtCtaCardExamplesModule } from '../cta-card/cta-card-examples.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DtIconModule.forRoot({
      svgIconLocation: `https://unpkg.com/@dynatrace/barista-icons/{{name}}.svg`,
    }),
    DtCtaCardExamplesModule
  ],
  declarations: [ AppComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
