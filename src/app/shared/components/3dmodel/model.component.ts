
import {Component, Input} from '@angular/core';

@Component ({
	moduleId: module.id,
	selector: 'app-model',
	templateUrl: './model.component.html',
	styleUrls : ['./model.component.scss']
})

export class ModelComponent {

	@Input()
	apartment;

	@Input()
	rooms;

	@Input()
	images;

	@Input()
	activeBuilding;
}
