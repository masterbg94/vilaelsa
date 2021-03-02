
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_BASE} from '../../api.config';


@Injectable()

export class BuildingsService {
	constructor(private http: HttpClient) {}

	getAllBuildings(): any {
		return this.http.get( `${API_BASE}/buildings`);
	}
	getBulidingById(buildingId: number): any {
		return this.http.get( `${API_BASE}/buildings/${buildingId}`);
	}
}
