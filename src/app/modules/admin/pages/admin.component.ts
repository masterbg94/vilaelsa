
import {Component, OnInit} from '@angular/core';
import {ApartmentService} from '../../../shared/services/apartment.service';
import {BuildingsService} from '../../../shared/services/buildings.service';
import {RestData} from '../../../shared/model/rest-data.model';
import {Apartment, Garage} from '../../../shared/model/building.model';
import {GarageService} from '../../../shared/services/garage.service';


@Component({
	moduleId: module.id,
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss'],
	providers: [
		BuildingsService,
		ApartmentService,
		GarageService
	]
})

export class AdminComponent implements OnInit {
	toogle = false;

	toogle2 = false;

	toogleGarage = false;
	toogleGarage2 = false;


	showMessage: boolean;
	message = '';
	messageClass = '';

	apartmentsVilaElsa1= [];

	garageVilaElsa1 = [];


	apartmentsVilaElsa2= [];
	visibleRowLeft = -1;

	visibleRowRight = -1;


	pager = {
		page: 1,
		pageSize: 10
	};
	filter = {
		type: null,
		floor: null,
		areaMin: null,
		areaMax: null
	};

	totalItems: number;


	constructor(private buildingService: BuildingsService,
				private apartmentService: ApartmentService,
				private garageService: GarageService) {}

	ngOnInit() {}

	toogled1() {
		this.toogle = !this.toogle;
		this.getData();
	}
	toogledVilla2() {
		this.toogle2 = !this.toogle2;
		this.getData();
	}
	toogledGarage1() {
		this.toogleGarage = !this.toogleGarage;
		this.getGarages();
	}

	toogledGarage2(){
		this.toogleGarage2 = !this.toogleGarage2;
		this.getGarages();
	}

	toggleCollapseLeft(index: number): void {
		if (index !== this.visibleRowLeft) {
			this.visibleRowLeft = index;
		}else  {
			this.visibleRowLeft = -1;
		}
	}




	getGarages() {
		if (this.toogleGarage) {
			this.getGarage1();
		} else if (this.toogleGarage2) {
			this.getGarage2();
		}
	}

	getData() {
		if (this.toogle) {
			this.getVila1();
		}if (this.toogle2) {
			this.getVila2();
		}
	}


	toggleCollapseRight(index: number): void {
		if (index !== this.visibleRowRight) {
			this.visibleRowRight = index;
		} else {
			this.visibleRowRight = -1;
		}
	}

	goToPage1(pager: any): void {
		this.pager.page = pager.page;
		this.getData();
	}

	goToPage2(pager: any): void {
		this.pager.page = pager.page;
		this.getData();
	}

	goToGaragePage(pagerGarage: any): void {
		this.pager.page = pagerGarage.page;
		this.getGarages();
	}
	goToGaragePage2(pagerGarage: any): void {
		this.pager.page = pagerGarage.page;
		this.getGarages();
	}

	getGarage1(): void {
		this.garageService.getByBuilding(1, this.pager)
			.subscribe((garages: RestData<Garage>) => {
				this.garageVilaElsa1 = garages.data;
				this.totalItems = garages.total;

				console.log(this.garageVilaElsa1);
			});
	}

	getGarage2(): void {
		this.garageService.getByBuilding(2, this.pager)
			.subscribe((garages: RestData<Garage>) => {
				this.garageVilaElsa1 = garages.data;
				this.totalItems = garages.total;

				console.log(this.garageVilaElsa1);
			});
	}



	getVila1(): void {
		this.apartmentService.getApartmentByBuilding(1, this.filter, this.pager)
			.subscribe((restData: RestData<Apartment>) => {
				this.apartmentsVilaElsa1 = restData.data;
				this.totalItems          = restData.total;
				console.log(this.apartmentsVilaElsa1);
			});
	}
		getVila2() {
		this.apartmentService.getApartmentByBuilding(2, this.filter, this.pager)
			.subscribe((restData: RestData<Apartment>) => {
				this.apartmentsVilaElsa2 = restData.data;
				this.totalItems = restData.total;
			});
	}

	updateApartmentStatus(apartmentId: number, status: string, index: number): void {
		this.apartmentService
			.updateApartment(apartmentId, status)
			.subscribe(b => {
				if (b) {
					this.getData();
					this.showMessage  = true;
					this.message      = `Uspesno ste promenili status Apartmana na status ${status}`;
					this.messageClass = 'alert alert-success';
				} else {
					// Handle update error
					this.showMessage  = true;
					this.message      = 'Greska prilikom cuvanja';
					this.messageClass = 'alert-danger';
					}

				setTimeout(() => {
					this.message     = '';
					this.showMessage = false;
				}, 5000);
			});
	}
	updateGarageStatus(garageId: number, status: string, index: number): void {
		this.garageService
			.updateGarage(garageId, status)
			.subscribe(g => {
				if (g) {
					this.getGarages();
					this.showMessage  = true;
					this.message      = `Uspesno ste promenili status Garaže na status ${status}`;
					this.messageClass = 'alert alert-success';
				} else {
					// Handle update error
					this.showMessage  = true;
					this.message      = 'Greska prilikom cuvanja';
					this.messageClass = 'alert-danger';
				}

				setTimeout(() => {
					this.message     = '';
					this.showMessage = false;
				}, 5000);
			});
	}
}
