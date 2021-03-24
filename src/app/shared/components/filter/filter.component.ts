import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TypeService} from '../../services/type.service';
import {FloorService} from '../../services/floor.service';
import {Floor, Type} from '../../model/building.model';
import {TranslateService} from 'ng2-translate';

@Component({
	moduleId: module.id,
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss'],
	providers: [
		TypeService,
		FloorService
	]
})
export class FilterComponent implements OnInit, OnDestroy{

	selectTypeCollapsed: boolean;

	selectedType: {
		id: number | null,
		name: string | null
	};

	selectedFloor: {
		id: number | null,
		name: string | null
	};

	selectedArea: {
		min: number,
		max: number
		selected: string;
	};

	availableFloors: Floor[];

	availableTypes: Type[];

	clicked = false;

	@Input()
	activeBuilding: number;

	@Input()
	whatType = 'TIPOVI APARTMANA';

	@Input()
	whatFloors = 'SPRAT';

	@Output()
	public onTypeChange: EventEmitter<number | null> = new EventEmitter();

	@Output()
	public onFilterChange: EventEmitter<boolean> = new EventEmitter();

	@Output()
	public onFloorChange: EventEmitter<number | null> = new EventEmitter();


	@Output()
	public onAreaChange: EventEmitter<any | null> = new EventEmitter();

	constructor(private typeService: TypeService,
				private floorService: FloorService,
				private translateService: TranslateService)
	{
		this.selectedType = {
			id: null,
			name: null
		};

		this.selectedFloor = {
			id: null,
			name: null
		};

		this.selectedArea = {
			min: null,
			max : null,
			selected: null
		};

		this.translateService.onLangChange.subscribe((lang) => {
			if (lang.lang === 'en') {
				this.whatType = 'TYPES OF APARTMENTS';
				this.whatFloors = 'FLOOR';
			} if (lang.lang === 'ru') {
				this.whatType = 'ТИПЫ КВАРТИР';
				this.whatFloors = 'ЭTAЖ';
			} if (lang.lang === 'sr') {
				this.whatType = 'TIPOVI APARTMANA';
				this.whatFloors = 'SPRAT';
			}
		});
	}


	getTypes()
	{
		this.typeService.getTypeByBuilding(this.activeBuilding)
			.subscribe(types => {
				this.availableTypes = types;
			});
	}
	getFloors() {
		 this.floorService.getFloorByBuilding(this.activeBuilding)
			.subscribe(floors => {
				if (this.activeBuilding === 3) {
					this.availableFloors = floors.filter(x => x.name != 'Suteren');
				} else {
					this.availableFloors = floors;
				}
			});
	}

	ngOnInit() {

	}

	ngOnDestroy() {
		this.onTypeChange.complete();
	}


	public selectAType(type: any): void {
		this.selectedType = {
			id: type.id,
			name: type.name
		};
		this.onTypeChange.emit(type);
	}

	public selectFloors(floor: any ): void {
		this.selectedFloor = {
			id: floor.id,
			name: floor.name
		};
		this.onFloorChange.emit(floor);
	}

	public selectArea(min: number, max: number, selected: string) {
		this.selectedArea.min = min;
		this.selectedArea.max = max;
		this.selectedArea.selected = selected;

		this.onAreaChange.emit(this.selectedArea);
	}


	public filterAll(): void {
		this.clicked = true;
		this.onFilterChange.emit(this.clicked);
	}
}
