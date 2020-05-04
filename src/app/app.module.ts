import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ParagraphCompComponent } from './paragraph-comp/paragraph-comp.component';
import { ItemCompComponent } from './item-comp/item-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ParagraphCompComponent,
    ItemCompComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
