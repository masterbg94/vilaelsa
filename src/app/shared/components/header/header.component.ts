import {Component, Input} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
	@Input()
	headerImg = '../../../../assets/images/vila-elsa-1/building1-header.png';

	@Input()
	headerTextBuilding = 'VILA ELSA I';
	@Input()
	headerTextSubBuilding = 'EKSKLUZIVNA I MODERNA';
}
