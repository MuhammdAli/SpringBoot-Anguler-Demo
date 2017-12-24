import {Component, Input} from '@angular/core';
import {FBService} from './fb.service';

import {Place, User} from './data-model';

@Component({
  selector: 'places-list',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
  inputs: ['allPlaces'],
})
export class PlacesComponent {
  @Input() allPlaces: Place[];

  constructor(private fbService: FBService) {
  }

}
