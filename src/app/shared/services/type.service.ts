import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_BASE} from '../../api.config';
import {Observable} from 'rxjs/Observable';
import {Type} from '../model/building.model';

@Injectable()

export class TypeService {

	constructor(private http: HttpClient){}

	public getAllTypes(): Observable<any> {
		return this.http.get<any>(`${API_BASE}/types`);
	}

	public getTypeById(id: number): Observable<any> {
		return this.http.get(`${API_BASE}/types/${id}`);
	}

	public getTypeByBuilding(id: number): Observable<any> {
		return this.http.get(`${API_BASE}/buildings/${id}/types`);
	}
}
