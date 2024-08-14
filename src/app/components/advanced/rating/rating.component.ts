import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  starRate = 0;
  starRate1 = 5;
  starRate2 = 4;
  starRate3 = 6;
  starRate4 = 5;
  starRate5 = 0;
  starRate6 = 3;
reset(){
 this.starRate6 = 0;
}
}
