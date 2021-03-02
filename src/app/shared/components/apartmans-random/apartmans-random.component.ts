import {Component, Input, OnInit} from '@angular/core';
import {Apartment} from '../../model/building.model';
import {TranslateServices} from '../../services/translate.service';
import {TranslateService} from 'ng2-translate';

@Component({
	moduleId: module.id,
	selector: 'app-apartmans',
	templateUrl: './apartmans-random.component.html',
	styleUrls: ['./apartmans-random.component.scss'],
	providers: [
		TranslateServices
	]
})

export class ApartmansRandomComponent implements OnInit{

	@Input()
	apartments: Apartment[];

	@Input()
	apartment;

	@Input()
	types: any;

	@Input()
	activeBuilding: any;
	@Input()
	images: any;

	@Input()
	floors: any;

	@Input()
	floor: any;

	@Input()
	numberOfBathrooms: number;

	russian = false;

	constructor(private translateService: TranslateService) {


	}



	ngOnInit() {
		this.translateService.onLangChange.subscribe((lang) => {
			if (lang.lang === 'ru') {
				this.russian = true;
			}else {
				this.russian = false;
			}
		});
	}
}
