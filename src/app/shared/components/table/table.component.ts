import {Component, Input} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls : ['./table.component.scss']
})

export class TableComponent {

	@Input()
	apartment;

	@Input()
	rooms;

	@Input()
	images;
}
