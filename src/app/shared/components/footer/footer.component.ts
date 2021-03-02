import {Component} from '@angular/core';
import {TranslateServices} from '../../services/translate.service';
import {LanguageComponent} from '../language/language.component';

@Component({
	moduleId: module.id,
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
	providers: [
		TranslateServices
	]
})

export class FooterComponent extends LanguageComponent {
	constructor(private translateService: TranslateServices) {
		super(translateService);
	}
}
