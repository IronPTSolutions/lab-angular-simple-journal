import { EntriesService } from './shared/services/entries.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs.operators';

import { AppComponent } from './app.component';
import { EntryListComponent } from './components/entry/entry-list/entry-list.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
