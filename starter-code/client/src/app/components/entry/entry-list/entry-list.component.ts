import { EntriesService } from './../../../shared/services/entries.service';
import { Entry } from './../../../shared/models/entry.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries: Array<Entry> = []

  constructor(private entriesService: EntriesService) {}

  ngOnInit() {
    this.fetchEntries();
  }

  onCreateEntry() {
    this.fetchEntries();
  }

  private fetchEntries() {
    this.entriesService.list()
      .subscribe(entries => this.entries = entries);
  }

}
