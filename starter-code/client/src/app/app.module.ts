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
import { EntryItemComponent } from './components/entry/entry-item/entry-item.component';
import { EntryFormComponent } from './components/entry/entry-from/entry-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    EntryItemComponent,
    EntryFormComponent
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
