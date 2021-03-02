import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {API_BASE} from '../../api.config';
import {Observable} from 'rxjs/Observable';
import {RestData} from '../model/rest-data.model';
import {Apartment} from '../model/building.model';

@Injectable()

export class ApartmentService {
	constructor(private http: HttpClient) {

	}

	public getApartments(filter?: any, pager?: any): Observable<RestData<Apartment>> {
		console.log(filter);
		let params = new HttpParams();

		// Set filter options
		if (filter.type != null) {
			params = params.append('type', filter.type);
		}
		if (filter.floor != null) {
			params = params.append('floor', filter.floor);
		}
		if (filter.areaMin != null) {
			params = params.append('areaMin', filter.areaMin);
		}
		if (filter.areaMax != null) {
			params = params.append('areaMax', filter.areaMax);
		}

		// Setup pager options
		params = params.append('page', pager.page);
		params = params.append('pageSize', pager.pageSize);

		return this.http.get<RestData<Apartment>>(`${API_BASE}/apartments`, {params: params});
	}

	public getRandomApartments() {
		return this.http.get(`${API_BASE}/apartments/random`);

	}

	public getApartmentId(apartmentId: number) {
		return this.http.get(`${API_BASE}/apartments/${apartmentId}`);

	}

	public getApartmentByBuilding(buildingId: number, filter?: any, pager?: any): Observable<RestData<Apartment>> {
		console.log(filter);
		let params = new HttpParams();

		// Set filter options
		if (filter.type != null) {
			params = params.append('type', filter.type);
		}
		if (filter.floor != null) {
			params = params.append('floor', filter.floor);
		}
		if (filter.areaMin != null) {
			params = params.append('areaMin', filter.areaMin);
		}
		if (filter.areaMax != null) {
			params = params.append('areaMax', filter.areaMax);
		}

		// Setup pager options
		params = params.append('page', pager.page);
		params = params.append('pageSize', pager.pageSize);

		return this.http.get(`${API_BASE}/buildings/${buildingId}/apartments`, {params: params});
	}

	public getApartmentByB(buildingId): any {

		return this.http.get(`${API_BASE}/buildings/${buildingId}/apartments`);
	}

	updateApartment(apartmentId: number, status: string): Observable<boolean> {

		const formData: FormData = new FormData();

		formData.append('status', status);

		return this.http.post(`${API_BASE}/update/${apartmentId}`, formData);
	}
}
