import {Component, OnInit} from '@angular/core';
import {ApartmentService} from '../../../shared/services/apartment.service';

@Component({
	selector: 'app-premises',
	templateUrl: './premises.component.html',
	styleUrls: ['./premises.component.scss']
})
export class PremisesComponent implements OnInit {
	img3 = '../../../../assets/images/elsa3.png';
	locals;
	filter = {
		type: null,
		floor: null,
		areaMin: null,
		areaMax: null
	};
	pager = {
		page: 1,
		pageSize: 100
	};
	selectedLocal;

	constructor(private apartmentService: ApartmentService) {
	}

	ngOnInit(): void {
		this.apartmentService
			.getApartmentByBuilding(3, this.filter, this.pager)
			.subscribe((restData: any) => {
					console.log('locali', restData);
					this.locals = restData.data.filter(x => x.floor.name === 'Suteren');
					console.log('locali', this.locals);
				}
			);
	}

	forwardData(x) {
		this.selectedLocal = x;
	}
}
