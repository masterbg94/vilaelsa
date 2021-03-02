import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BuildingsService} from '../../../shared/services/buildings.service';
import {ApartmentService} from '../../../shared/services/apartment.service';
import {ActivatedRoute} from '@angular/router';
import {RestData} from '../../../shared/model/rest-data.model';
import {Apartment} from '../../../shared/model/building.model';
import {FilterComponent} from '../../../shared/components/filter/filter.component';

@Component({
	moduleId:    module.id,
	selector:    'app-building',
	templateUrl: './building.component.html',
	styleUrls:   ['./building.component.scss'],
	providers:   [
		BuildingsService,
		ApartmentService,
	]
})

export class BuildingComponent implements OnInit, AfterViewInit
{
	constructor(
		private buildingService: BuildingsService,
		private apartmentService: ApartmentService,
		private route: ActivatedRoute
	) {}

	filter = {
		type:    null,
		floor:   null,
		areaMin: null,
		areaMax: null
	};

	text1 = '';

	text2 = '';

	buildings = [];

	activeBuilding;

	activeBuildingId = 0;

	floors = [];

	images = [];

	apartment: Apartment;

	types = [];

	rooms = [];

	numOfBathroom: number;

	apartments: Apartment[] = [];

	totalItems: number;

	img1 = '../../../../assets/images/building-main.png';
	img2 = '../../../../assets/images/elsa2header.png';

	pager = {
		page:     1,
		pageSize: 10
	};

	@ViewChild(FilterComponent)
	public filterComponent: FilterComponent;

	ngOnInit() {}

	ngAfterViewInit() {
		this.route.params.subscribe(params => {
			this.filter = {
				type:    null,
				floor:   null,
				areaMin: null,
				areaMax: null
			};

			this.filterComponent.selectedType = {
				id: null,
				name: null
			};

			this.filterComponent.selectedFloor = {
				id: null,
				name: null
			};

			this.filterComponent.selectedArea = {
				min: null,
				max : null,
				selected: null
			};

			this.getBuilding(params['id']);
		});
	}

	public getBuilding(buildingId: number)
	{
		this.buildingService
			.getBulidingById(buildingId)
			.subscribe(building => {
				this.activeBuilding   = building;
				this.activeBuildingId = building.id;
				this.loadData();
			});
	}

	public loadData()
	{
		this.apartmentService
			.getApartmentByBuilding(this.activeBuilding.id, this.filter, this.pager)
			.subscribe((restData: RestData<Apartment>) => {
				this.apartments = restData.data;
				this.totalItems = restData.total;

				this.apartments.forEach((apt: Apartment) => {

					// Get type for this apartment abd it's images

					this.apartment = apt;

					this.floors = apt.floor;

					this.types = apt.type;
					this.rooms = apt.room;

					this.numOfBathroom = this.rooms.filter(r => r.name === 'Kupatilo').length;

					this.images = apt.images;
				});
			});
	}

	onTypeChange(type: any): void
	{
		this.filter.type = type.id;
	}

	onFloorChange(floor: any): void
	{
		this.filter.floor = floor.id;
	}

	onAreaChange(area: any): void
	{
		this.filter.areaMax = area.max;
		this.filter.areaMin = area.min;
	}

	onFilter(): void
	{
		this.loadData();
	}

	goToPage(pager: any): void
	{
		this.pager.page = pager.page;
		this.loadData();
	}
}
