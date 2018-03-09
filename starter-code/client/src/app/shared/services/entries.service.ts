import { environment } from './../../../environments/environment';
import { Entry } from './../models/entry.model';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EntriesService {
  private static readonly API_BASE: string = environment.apiBase;
  private static readonly ENTRY_API: string = `${EntriesService.API_BASE}/journal-entries`;
  private static defaultHeaders = new Headers({ 'Content-Type': 'application/json'});
  private static defaultOptions = new RequestOptions({ headers: EntriesService.defaultHeaders });

  constructor(private http: Http) {}

  list(): Observable<Array<Entry>> {
    return this.http
      .get(EntriesService.ENTRY_API)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error))
  }

  protected handleError(error: Response | any): Observable<any> {
    if (!environment.production) {
      console.error(`EntriesService error: ${error}`)
    }
    return Observable.throw(error.json());
  }
}
