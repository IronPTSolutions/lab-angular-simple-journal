import { EntriesService } from './../../../shared/services/entries.service';
import { Entry } from './../../../shared/models/entry.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent {
  entry: Entry = new Entry();
  @Output() onCreate: EventEmitter<Entry> = new EventEmitter<Entry>()

  constructor(private entriesService: EntriesService) {}

  onSubmitCreateForm(form: NgForm) {
    this.entriesService
      .create(this.entry)
      .subscribe(entry => {
        this.onCreate.emit(entry);

        this.entry = new Entry();
        form.reset();
      });
  }

}
