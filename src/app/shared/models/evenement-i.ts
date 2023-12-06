export interface EvenementI {
	titre: string;
	date: number | Date;
	places: number;
	horaires: HoraireI;
	info?: string;
	image?: string;
	alt?: string;
}

interface HoraireI {
	debut: string;
	fin: string;
}
