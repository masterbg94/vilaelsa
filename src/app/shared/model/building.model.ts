export interface BuildingModel {
	id?: number;
	name?: string;
	sliderName: string;
	sold?: boolean;
	headerImg?: string;
	types?: Type[];
	floors: Floor[];
	garages: Garage[];

}

export interface Type {
	id: number;
	name: string;
	apartments: Apartment[];
	rooms: Rooms[];
	images: Images[];
	slideImage: string;
	description: string;
}

export interface Apartment {
	id: number;
	roomsNumber: number;
	status: ApartmanStatus;
	area: number;
	imgModel: string;
	imgHailight: string;
	typeId?: number;
	type?;
	images;
	floor;
	room;
	buildingId;
	updated_at;
	apartmentNumber: number;
}

export interface Garage {
	id: number;
	name: string;
	area: number;
	imgHailight: string;
	status: string;
	garageNumber: number;
	buildingId: number;
}

export interface Images {
	name: string;
}

export interface Floor {
	id: number;
	name: string;
	apartment: Apartment[];
}

export interface Rooms {
	id: number;
	name: string;
	area: number;
	roomNumber: number;

}

export type ApartmanStatus = 'Prodato' | 'Slobodno' | 'Rezervisano';


