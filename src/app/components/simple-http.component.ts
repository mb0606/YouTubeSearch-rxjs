import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-simple-http',
  template: `

  <h2>Basic Request</h2>
  <button type="button" class="btn btn-default" (click)="makeRequest()">Make Request</button>
   <div *ngIf="loading">loading...</div>
   <br>
   <pre *ngIf="data">{{data | json}}</pre>



  `,
})
export class SimpleHTTPComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: Http) { }

  ngOnInit() {
  }
  makeRequest(): void {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
        .subscribe((res: Response) => {
          this.data = res.json();
          this.loading = false;
        });
  }

}
