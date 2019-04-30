import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent {

  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
  t = timer(1000, 2000);
  subscribe = this.t.subscribe(val => this.bufferValue = val);
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, image: 'https://picsum.photos/900/500?random&t=' + Math.random()},
          { title: 'Card 2', cols: 1, rows: 1, image: 'https://picsum.photos/900/500?random&t=' + Math.random() },
          { title: 'Card 3', cols: 1, rows: 1, image: 'https://picsum.photos/900/500?random&t=' + Math.random() },
          { title: 'Card 4', cols: 1, rows: 1, image: 'https://picsum.photos/900/500?random&t=' + Math.random() }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1, image: 'https://picsum.photos/900/500?random&t=' + Math.random() },
        { title: 'Card 2', cols: 1, rows: 1, image: 'https://picsum.photos/900/500?random&t=' + Math.random() },
        { title: 'Card 3', cols: 1, rows: 2, image: 'https://picsum.photos/900/500?random&t=' + Math.random() },
        { title: 'Card 4', cols: 1, rows: 1, image: 'https://picsum.photos/900/500?random&t=' + Math.random() }
      ];
    })
  );
  myClickFunction(event) {
    this.value = 70;
      console.log(event);
   }

  constructor(private breakpointObserver: BreakpointObserver) {}
}
