import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  color:any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.color = this.data.caseDetails.color;
    console.log(this.color);
  }

}
