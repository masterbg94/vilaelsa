import {Component, OnInit} from '@angular/core';
import {BuildingModel, Garage} from '../../../shared/model/building.model';
import {BuildingsService} from '../../../shared/services/buildings.service';
import {GarageService} from '../../../shared/services/garage.service';
import {ActivatedRoute} from '@angular/router';
import {RestData} from '../../../shared/model/rest-data.model';

@Component({
	moduleId: module.id,
	templateUrl: './garage.component.html',
	styleUrls: ['./garage.component.scss'],
	providers: [
		BuildingsService,
		GarageService
	]
})

export class GarageComponent implements OnInit {
	garages: Garage[];

	activeBuilding: BuildingModel;

	headerSubImage = '../../../../assets/images/garageHeader.png';
	headerElsa2 = '../../../../assets/images/headerElsa2.png';

	pager = {
		page: 1,
		pageSize: 10
	};
	totalItems: number;



	constructor(private buildingService: BuildingsService,
				private garageService: GarageService,
				private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params
			.subscribe(params => {
				this.getBuilding(params['id']);
			});
	}
	public getBuilding(buildingId: number)
	{
		this.buildingService
			.getBulidingById(buildingId)
			.subscribe(building => {
				this.activeBuilding = building;
				this.getGaragesByBuilding();
			});
	}
	public getGaragesByBuilding() {
		this.garageService.getByBuilding(this.activeBuilding.id, this.pager)
			.subscribe((garages: RestData<Garage>) => {
				this.garages = garages.data;
				this.totalItems = garages.total;

			});
	}

	goToPage(pager: any): void {
		this.pager.page = pager.page;
		this.getGaragesByBuilding();
	}
}
