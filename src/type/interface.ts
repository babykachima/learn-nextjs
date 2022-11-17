export interface IEvent {
	id: number;
	title: string;
	description: string;
	location: string;
	date: string;
	image: string;
	isFeatured: boolean;
}

export interface IProduct {
	id: string;
	title: string;
	description: string;
}

export interface User {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}
