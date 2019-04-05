import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticoloComponent } from './articolo/articolo.component';
import { ArticoloFormComponent } from './articolo-form/articolo-form.component';
import { ArticoloFormReactiveComponent } from './articolo-form-reactive/articolo-form-reactive.component';
import { ReactiveFormsModule } from "@angular/forms";
import { TruncatePipe } from './articolo-form-reactive/truncate';
import { ArticoliService } from './articoli.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticoloComponent,
    ArticoloFormComponent,
    ArticoloFormReactiveComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ArticoliService],
  bootstrap: [AppComponent]
})
export class AppModule { }
