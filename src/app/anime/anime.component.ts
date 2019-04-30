import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.less']
})
export class AnimeComponent implements OnInit {
  anime$: Object;
  constructor(private anime: DataService) { }

  ngOnInit() {
    this.anime.getanimes().subscribe(
      anime => this.anime$ = anime
    );
  }

}
