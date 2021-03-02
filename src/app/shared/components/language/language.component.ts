import {TranslateServices} from '../../services/translate.service';
import {EventEmitter, Output} from '@angular/core';

export class LanguageComponent {
	navbarCollapsed: boolean;

	lng: any[] = [
		{
			jezik: 'SRPSKI',
			img: '../../../../assets/images/Serbia-Flag-icon.png',
			activeLang: 'sr'
		},
		{
			jezik: 'ENGLESKI',
			img: '../../../../assets/images/England-Flag-icon.png',
			activeLang: 'en'
		},
		{
			jezik: 'RUSKI',
			img: '../../../../assets/images/Russia-Flag-icon.png',
			activeLang: 'ru'
		}
	];

	currentLng = this.lng[0].jezik;
	currentImg = this.lng[0].img;

	@Output()
	public onLanguageChange: EventEmitter<{} | null> = new EventEmitter();

	constructor(public service: TranslateServices) {}

	public setLng(lng, img, lang, skipEmit?: boolean) {
		this.currentLng = lng;
		this.currentImg = img;

		if (!skipEmit) {
			this.service.changeLanguage(lang);
			this.onLanguageChange.emit({
				lng, img, lang
			});
		}
	}
}
