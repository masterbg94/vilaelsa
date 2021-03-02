import {Component, OnInit} from '@angular/core';
import {Apartment} from '../../../shared/model/building.model';
import {BuildingsService} from '../../../shared/services/buildings.service';
import {ApartmentService} from '../../../shared/services/apartment.service';

@Component ({
	moduleId: module.id,
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	providers: [
		BuildingsService,
		ApartmentService
	]
})
export class HomeComponent implements OnInit {

	apartments: Apartment[] = [];
	images = [];
	floors: {
		id:  null;
		name: null;
	};
	types;
	floor;
	rooms = [];

	numOfBathroom: number;

	constructor(
		private buildingService: BuildingsService,
		private apartmentService: ApartmentService
	) {}

	ngOnInit() {
		this.loadData();
	}

	loadData(): void {
		this.apartmentService.getRandomApartments()
			.subscribe((data: Apartment[]) => {

				this.apartments = data;

				this.apartments.forEach((apt: Apartment) => {
					// Get type for this apartment abd it's images

					this.floors = apt.floor;

					this.rooms = apt.room;

					this.numOfBathroom = this.rooms.filter(r => r.name === 'Kupatilo').length;


					this.types = apt.type;

					this.images = apt.images;
				});
			});
	}
}
