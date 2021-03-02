import {Component, Input} from '@angular/core';

@Component({
	moduleId:    module.id,
	selector:    'app-header-sub',
	templateUrl: './header-sub.component.html',
	styleUrls: ['./header-sub.component.scss']
})

export class HeaderSubComponent {
	@Input()
	headerSubImage = '../../../../assets/images/header-bottom.png';

	@Input()
	headerTextBuilding = 'VILA ELSA I';
	headerTextSubBuilding = 'EKSKLUZIVNA I MODERNA';
}
