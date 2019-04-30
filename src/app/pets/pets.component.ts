import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.less'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('3s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('3s', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class PetsComponent implements OnInit {
  pets$: Object;
  constructor(private pet: DataService) { }
    step = 0;

    setStep(index: number) {
      this.step = index;
    }

    nextStep() {
      this.step++;
    }

    prevStep() {
      this.step--;
  }
  ngOnInit() {
    this.pet.getPets().subscribe(
      pet => this.pets$ = pet
    );
  }

}
