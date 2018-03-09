import { EntryListComponent } from './components/entry/entry-list/entry-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'entries', pathMatch: 'full'},
    { path: 'entries', component: EntryListComponent }
];
