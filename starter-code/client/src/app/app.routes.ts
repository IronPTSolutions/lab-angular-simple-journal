import { EntryItemComponent } from './components/entry/entry-item/entry-item.component';
import { EntryListComponent } from './components/entry/entry-list/entry-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'entries', pathMatch: 'full'},
    { path: 'entries', component: EntryListComponent },
    { path: 'entries/:id', component: EntryItemComponent }
];
