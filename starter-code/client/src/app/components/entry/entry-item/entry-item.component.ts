import { EntriesService } from './../../../shared/services/entries.service';
import { Entry } from './../../../shared/models/entry.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry-item',
  templateUrl: './entry-item.component.html',
  styleUrls: ['./entry-item.component.css']
})
export class EntryItemComponent implements OnInit {
  entry: Entry = new Entry();

  constructor(
    private routes: ActivatedRoute,
    private entriesService: EntriesService) {}

  ngOnInit() {
    this.routes
      .params
      .subscribe(params => {
        this.entriesService
          .get(params['id'])
          .subscribe(entry => this.entry = entry)
      })
  }

}
