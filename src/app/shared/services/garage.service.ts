import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Garage} from '../model/building.model';
import {API_BASE} from '../../api.config';
import {RestData} from '../model/rest-data.model';

@Injectable()

export class GarageService {
	constructor(private http: HttpClient) {}


	public getByBuilding(buildingId,  pager?: any): Observable<RestData<Garage>> {

		let params = new HttpParams();

		params = params.append('page', pager.page);
		params = params.append('pageSize', pager.pageSize);

		return this.http.get<RestData<Garage>>(`${API_BASE}/buildings/${buildingId}/garages`, {params: params});
	}
	updateGarage(garageId: number, status: string): Observable<boolean> {

		const formData: FormData = new FormData();

		formData.append('status', status);

		return this.http.post(`${API_BASE}/updategarage/${garageId}`, formData);
	}
}
