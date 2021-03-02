import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_BASE} from '../../api.config';
import {Floor} from '../model/building.model';

@Injectable()

export class FloorService {

	constructor(private http: HttpClient) {}

	public getAllFloors(): Observable<Floor[]> {
		return this.http.get<any>(`${API_BASE}/floors`);
	}

	public getFloorById(id: number): Observable<any> {
		return this.http.get(`${API_BASE}/floors/${id}`);
	}

	public getFloorByBuilding(id: number): Observable<any> {
		return this.http.get(`${API_BASE}/buildings/${id}/floors`);
	}
}
