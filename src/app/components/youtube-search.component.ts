
import { Component } from '@angular/core';
import { SearchResult } from '../search-result'



@Component({
  selector: 'youtube-search',
  template: `
  <div class='container'>
      <div class="page-header">
       <h1>YouTube Search</h1>
      </div>

      <div class="row">
        <div class="input-group input-group-lg col-md-12">
          <search-box
             (loading)="loading = $event"
             (results)="updateResults($event)"
              ></search-box>
        </div>
      </div>

      <div class="row">

          <img
             style="margin: 0px 45% ;height: 100px;"
             *ngIf="loading"
             src='./assets/images/loading.gif' />

        <search-result
          *ngFor="let result of results"
          [result]="result">
        </search-result>
      </div>
  </div>
  `
})
export class YouTubeSearchComponent {
  results: SearchResult[];

  updateResults(results: SearchResult[]): void {
    console.log("this is results in youtube search",results)
    this.results = results;
    // console.log("results:", this.results);
  }
}