import {Component, Input} from '@angular/core';
import {Apartment} from '../../model/building.model';

@Component({
	moduleId: module.id,
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})

export class SliderComponent {
	@Input()
	apartments: Apartment[];

	@Input()
	types: any;

	@Input()
	activeBuilding;


	@Input()
	images: any;

	@Input()
	floors: any;
	@Input()
	floor: any;

	@Input()
	numberOfBathrooms;
}
