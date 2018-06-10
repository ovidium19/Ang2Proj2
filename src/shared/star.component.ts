import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';


@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarRatingComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  ngOnChanges() {
    this.starWidth = this.rating * 90 / 5;
  }
  OnClick(): void {
    this.ratingClicked.emit(`rating clicked: ${this.rating}`);
  }
}
