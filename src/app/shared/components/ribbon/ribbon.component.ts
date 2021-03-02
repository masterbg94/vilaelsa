import {Component, Input} from '@angular/core';
import {RibbonStyle} from './ribbon.style';

@Component({
	moduleId: module.id,
	selector: 'app-ribbon',
	templateUrl: './ribbon.component.html',
	styleUrls: ['./ribbon.component.scss']
})

export class RibbonComponent {
	@Input('style') style: RibbonStyle;
}
