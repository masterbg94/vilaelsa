import {Component, HostListener} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {TranslateServices} from '../../services/translate.service';
import {LanguageComponent} from '../language/language.component';

@Component({
	moduleId: module.id,
	selector: 'app-nav-menu',
	templateUrl: './nav-menu.component.html',
	styleUrls: ['./nav-menu.component.scss'],
	animations: [
		trigger('slideInOut', [
			state('true', style({ height: '40px', 'z-index': '100'})),
			state('false', style({ height: '*' , 'z-index': '100'})),
			transition('1 => 0', animate('300ms ease-in')),
			transition('0 => 1', animate('300ms ease-out'))
		]),
		trigger('showText', [
			state('true',  style({'margin-left': '-150px' })),
			state('false', style({'margin-left' : '0' })),
			transition('1 => 0', animate('600ms ease-in')),
			transition('0 => 1', animate('600ms ease-out'))
		]),
		trigger('showCarret', [
			state('true', style({'opacity': '0' })),
			state('false', style({'opacity' : '1' })),
			transition('1 => 0', animate('800ms ease-in')),
			transition('0 => 1', animate('800ms ease-out'))
		]),
		trigger('contact', [
			state('true', style({'opacity': '0' })),
			state('false', style({'opacity' : '1' })),
			transition('1 => 0', animate('600ms ease-in')),
			transition('0 => 1', animate('600ms ease-out'))
		])
	],
	providers: [
		TranslateServices
	]
})
export class NavMenuComponent extends LanguageComponent {

	/**
	 * Width of viewport used for handling different animations on different device size.
	 */
	windowWidth: number;

	constructor(private translateService: TranslateServices) {
		super(translateService);
	}

	@HostListener('window:resize', ['$event'])
	sizeWindow(event) {
		this.windowWidth = event.target.innerWidth;
	}

	public toggle(): void {
		this.navbarCollapsed = !this.navbarCollapsed;
	}

	public doClick(): void {
		this.navbarCollapsed = false;
	}
}
