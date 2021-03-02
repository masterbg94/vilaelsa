import {Component, Input, OnInit} from '@angular/core';
import {AlertStyle} from './alert.style';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
	moduleId:    module.id,
	selector:    'app-alert',
	templateUrl: './alert.component.html',
	styleUrls:   ['./alert.component.scss'],
	animations: [
		trigger('appAlert',[
			state('true', style({
				'opacity': '1'
			})),
			state('false', style({
				'opacity': '0'
			})),
			transition('true => false', animate('1000ms')),
			transition('false => true', animate('700ms'))
		])
	]
})

export class AlertComponent implements OnInit{
	@Input('style') style: AlertStyle;

	@Input()
		showing = true;

	ngOnInit() {
	}
}
