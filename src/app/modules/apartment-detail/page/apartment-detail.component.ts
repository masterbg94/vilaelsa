import {Component, OnInit} from '@angular/core';
import {BuildingsService} from '../../../shared/services/buildings.service';
import {ApartmentService} from '../../../shared/services/apartment.service';
import {ActivatedRoute} from '@angular/router';
import {Apartment, BuildingModel, Rooms} from '../../../shared/model/building.model';

@Component({
	moduleId: module.id,
	selector: 'app-apartment-detail',
	templateUrl: './apartment-detail.component.html',
	styleUrls: ['./apartment-detail.component.scss'],
	providers: [
		ApartmentService,
		BuildingsService
	]
})

export class ApartmentDetailComponent implements OnInit
{

	buildings: BuildingModel[];

	buildingRouteId: number;

	apartment: Apartment;

	rooms: Rooms[];

	images = [];

	activeBuilding: BuildingModel;

	activeBuildingId = 0;

	headerImage1 = '../../../../assets/images/header1.png';
	headerImage2 = '../../../../assets/images/headerDetailElsaII1.png';
	headerSubImage = '../../../../assets/images/headerDetailElsaII.png';

	constructor(private buildingService: BuildingsService,
				private apartmentService: ApartmentService,
				private route: ActivatedRoute) {}

	ngOnInit() {
		{
			this.buildingService
				.getAllBuildings()
				.subscribe((buildings: BuildingModel[]) => {
					this.buildings = buildings;
				});

			this.route.params.subscribe(r => {
				this.buildingRouteId = r['id'];
				this.getApartmentId(r['aid']);
			});
		}
	}

	getBuilding(buildingId: number): void {
		this.buildingService
			.getBulidingById(buildingId)
			.subscribe(building => {
				this.activeBuilding = building;
				this.activeBuildingId = building.id;
			});
	}

	getApartmentId(apartmentId: number): any {
		this.apartmentService
			.getApartmentId(apartmentId)
			.subscribe((apartment: any) => {
				this.apartment = apartment;
				this.rooms = apartment.rooms;
				this.images = apartment.images;
				this.getBuilding(this.buildingRouteId);
			});
	}
}
