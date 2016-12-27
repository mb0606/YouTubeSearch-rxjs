import { Component, OnInit,ElementRef, Output, EventEmitter } from '@angular/core';
import { SearchResult } from '../search-result';
import { Observable } from 'rxjs';
import {YouTubeService} from "../youTube.service";


@Component({
  selector: 'search-box',
  templateUrl: `

      <div class="panel panel-default">
        <form>
          <input type="text" class="form-control" placeholder="Search YouTube ...">
        </form>
      
      </div>   

`,

})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeService,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
        .map((e: any) => e.target.value) // extract the value of the input
        .filter((text: string) => text.length > 1) // filter out if empty
        .debounceTime(250)                         // only once every 250ms
        .do(() => this.loading.next(true))         // enable loading
        // search, discarding old events if new input comes in
        .map((query: string) => this.youtube.search(query))
        .switch()
        // act on the return of the search
        .subscribe(
            (results: SearchResult[]) => { // on sucesss
              console.log("subscribe is working ", results)
              this.loading.next(false); // Emit true
              this.results.next(results); // Emit Search results array
            },
            (err: any) => { // on error
              console.log(err);
              this.loading.next(false);
            },
            () => { // on completion
              this.loading.next(false);
            }
        );

  }

}
